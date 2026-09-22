import { createHash, timingSafeEqual } from "node:crypto";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";

const SESSION_COOKIE = "portfolio_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function hashValue(value: string) {
  return createHash("sha256").update(value).digest();
}

export async function POST(request: Request) {
  const configuredPassword = process.env.PORTFOLIO_PASSWORD;
  const authSecret = process.env.AUTH_SECRET;

  if (!configuredPassword || !authSecret) {
    return NextResponse.json({ error: "Authentication is not configured." }, { status: 500 });
  }

  let submittedPassword = "";
  try {
    const body = await request.json();
    submittedPassword = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const passwordMatches = timingSafeEqual(hashValue(submittedPassword), hashValue(configuredPassword));
  if (!passwordMatches) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const token = await new SignJWT({ authenticated: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(new TextEncoder().encode(authSecret));

  const response = NextResponse.json({ authenticated: true });
  response.cookies.set({
    name: SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
  return response;
}
