import type { Metadata } from "next";
import { ApplicationPage } from "../../components/application-page";
import { medibankApplication } from "../../data/applications/medibank";

export const metadata: Metadata = {
  title: `${medibankApplication.role} Application | ${medibankApplication.person.name}`,
  description: `Application for the ${medibankApplication.role} role at ${medibankApplication.company}.`,
};

export default function Page() {
  return <ApplicationPage data={medibankApplication} />;
}