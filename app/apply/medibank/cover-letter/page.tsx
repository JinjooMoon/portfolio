import type { Metadata } from "next";
import { CoverLetterPage } from "../../../components/application-page";
import { medibankApplication } from "../../../data/applications/medibank";

export const metadata: Metadata = {
  title: `Cover Letter | ${medibankApplication.person.name}`,
  description: `Cover letter for the ${medibankApplication.role} role at ${medibankApplication.company}.`,
};

export default function MedibankCoverLetterPage() {
  return <CoverLetterPage data={medibankApplication} />;
}