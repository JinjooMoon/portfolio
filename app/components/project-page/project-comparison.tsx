import { ProjectImageRow } from "../project-image-row";
import type { ProjectComparison as ProjectComparisonConfig } from "./project-page-types";

type ProjectComparisonProps = ProjectComparisonConfig;

export function ProjectComparison({ before, after, layout = "equal" }: ProjectComparisonProps) {
  return (
    <div className={`project-comparison project-comparison--${layout}`}>
      <ProjectImageRow
        variation="two-device"
        images={[
          { ...before, widthPercent: layout === "weighted" ? 27 : 50 },
          { ...after, widthPercent: layout === "weighted" ? 73 : 50 },
        ]}
      />
    </div>
  );
}
