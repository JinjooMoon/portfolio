"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function UnlockPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        credentials: "same-origin",
      });

      if (!response.ok) {
        setError("Incorrect password. Please try again.");
        setPassword("");
        return;
      }

      router.replace("/");
      router.refresh();
    } catch {
      setError("Unable to unlock the portfolio. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="lock-page">
      <section className="lock-main" aria-labelledby="lock-heading">
        <div className="content-container lock-main-inner">
          <div className="lock-form-stack">
            <div className="lock-copy">
              <Image className="lock-icon" src="/images/lock-icon.svg" alt="" width={46} height={46} priority />
              <h1 id="lock-heading">Protected Portfolio</h1>
              <p>To respect client NDAs and pre-launch work, full portfolio access requires a password. You can find the password in my application materials.</p>
            </div>
            <div className="lock-form-region">
              <form className="lock-form" onSubmit={handleSubmit} aria-label="Unlock portfolio">
                <label className="sr-only" htmlFor="portfolio-password">Portfolio password</label>
                <input
                  id="portfolio-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "unlock-error" : undefined}
                  disabled={isSubmitting}
                  required
                />
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Checking" : "Enter"}
                </button>
              </form>
              <p id="unlock-error" className="lock-error" aria-live="assertive">{error}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="lock-help-section" aria-label="Access help">
        <div className="content-container">
          <div className="lock-help-card">
            <p><strong>Need access or having issues?</strong> Reach out via LinkedIn or Email and I&apos;ll help you shortly.</p>
            <div className="lock-social-links">
              <a className="lock-social-button" href="https://www.linkedin.com/in/jinjoopearlmoon/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/linkedin-icon.svg" alt="" width={24} height={24} />
                <span>Linkedin</span>
              </a>
              <a className="lock-social-button" href="mailto:jinjoo.pearl.moon@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/email-icon.svg" alt="" width={24} height={24} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
