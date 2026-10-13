import type { Metadata } from "next";
import { ResumePage } from "../../../components/application-page";
import { medibankApplication } from "../../../data/applications/medibank";

export const metadata: Metadata = {
  title: `Resume | ${medibankApplication.person.name}`,
  description: `Resume of ${medibankApplication.person.name}, ${medibankApplication.person.descriptor}.`,
};

export default function MedibankResumePage() {
  return <ResumePage data={medibankApplication} />;
}