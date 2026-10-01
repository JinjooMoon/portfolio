import type { ReactNode } from "react";

export function InsightCallout({ children }: { children: ReactNode }) {
  return (
    <blockquote className="project-insight-callout">
      <strong className="project-insight-callout__text"><em>{children}</em></strong>
    </blockquote>
  );
}