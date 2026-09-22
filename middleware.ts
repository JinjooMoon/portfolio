import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "portfolio_session";

function decodeBase64Url(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function hasValidSession(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const authSecret = process.env.AUTH_SECRET;
  if (!token || !authSecret) return false;

  try {
    const [encodedHeader, encodedPayload, encodedSignature] = token.split(".");
    if (!encodedHeader || !encodedPayload || !encodedSignature) return false;
    const header = JSON.parse(new TextDecoder().decode(decodeBase64Url(encodedHeader)));
    const payload = JSON.parse(new TextDecoder().decode(decodeBase64Url(encodedPayload)));
    if (header.alg !== "HS256" || typeof payload.exp !== "number" || payload.exp <= Math.floor(Date.now() / 1000)) return false;

    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(authSecret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"],
    );
    return crypto.subtle.verify(
      "HMAC",
      key,
      decodeBase64Url(encodedSignature),
      new TextEncoder().encode(`${encodedHeader}.${encodedPayload}`),
    );
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authDisabled = process.env.PORTFOLIO_AUTH_ENABLED === "false";
  const isUnlockPage = pathname === "/unlock";
  const isUnlockEndpoint = pathname === "/api/auth/unlock";
  const isNextAsset = pathname.startsWith("/_next/");
  const isStaticAsset = pathname.includes(".");

  if (authDisabled || isUnlockEndpoint || isNextAsset || isStaticAsset) return NextResponse.next();

  const authenticated = await hasValidSession(request);
  if (isUnlockPage) {
    return authenticated ? NextResponse.redirect(new URL("/", request.url)) : NextResponse.next();
  }

  return authenticated ? NextResponse.next() : NextResponse.redirect(new URL("/unlock", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
