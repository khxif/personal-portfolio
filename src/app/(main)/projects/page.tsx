import ProjectsGrid from "@/sections/ProjectsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectPage() {
  return (
    <main className="px-4 md:px-12 py-6 md:py-4">
      <h1 className="flex half-underline items-center font-light space-x-2 text-3xl md:text-4xl py-4 ">
        <span className="">Projects</span>
        <span className="font-semibold text-main">and Works!</span>
      </h1>
      <ProjectsGrid />
    </main>
  );
}
