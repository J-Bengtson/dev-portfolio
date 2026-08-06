import type { Metadata } from "next";
import { ResumePage } from "@/components/ResumePage";

export const metadata: Metadata = {
  title: "Currículo | Dev Full Stack — React, C#/.NET, AWS",
  description:
    "Currículo completo de desenvolvedor Full Stack especializado em React/Next.js, C#/.NET 8, Docker e AWS. Experiência profissional, formação acadêmica, habilidades técnicas e certificações.",
};

export default function Resume() {
  return <ResumePage />;
}
