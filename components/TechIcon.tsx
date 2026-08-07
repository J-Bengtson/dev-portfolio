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
  SiMongodb,
  SiMui,
  SiRedux,
  SiAngular,
  SiTerraform,
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
  "dotnet": SiDotnet,
  ".net 8": SiDotnet,
  ".net core": SiDotnet,
  "dotnet core": SiDotnet,
  "node.js": SiNodedotjs,
  node: SiNodedotjs,
  network: SiNodedotjs,
  redux: SiRedux,
  "material ui": SiMui,
  materialui: SiMui,
  mui: SiMui,
  angular: SiAngular,
  postgresql: SiPostgresql,
  "sql server": SiMysql,
  sqlserver: SiMysql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  redis: SiRedis,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  aws: FaAws,
  "ci/cd": SiGithubactions,
  terraform: SiTerraform,
  "rest / grpc": SiGraphql,
  "rest apis": SiGraphql,
  "rest api": SiGraphql,
  grpc: SiGraphql,
  microserviços: SiDotnet,
  microsserviços: SiDotnet,
  microservicos: SiDotnet,
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
