"use client";

import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGraphql,
  SiSharp,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const MAP: Record<string, IconType> = {
  react: SiReact,
  "next.js": SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  "c#": SiSharp,
  ".net": SiDotnet,
  ".net 8": SiDotnet,
  "node.js": SiNodedotjs,
  "rest / grpc": SiGraphql,
  grpc: SiGraphql,
  postgresql: SiPostgresql,
  "sql server": SiMysql,
  redis: SiRedis,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  aws: FaAws,
  "ci/cd": SiGithubactions,
};

export function TechIcon({
  name,
  className = "size-3.5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = MAP[name.trim().toLowerCase()];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden />;
}
