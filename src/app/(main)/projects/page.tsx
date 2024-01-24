import { projects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { LiaLinkSolid } from "react-icons/lia";

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function ProjectPage() {
  return (
    <main className="px-4 md:px-12 py-6 md:py-4">
      <h1 className="flex half-underline items-center font-light space-x-2 text-3xl md:text-4xl py-4 ">
        <span className="">Projects</span>
        <span className="font-semibold text-main">and Works!</span>
      </h1>

      <section className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-y-8  md:gap-x-8 px-4">
        {projects?.map((project) => (
          <div
            key={project?.id}
            className="px-4 py-6 rounded-md border border-main shadow-main drop-shadow-2xl 
           shadow-md transition-all duration-200 ease-in-out hover:scale-[1.03]
           flex flex-col items-center justify-center space-y-10"
          >
            <div className="w-full px-14">
              <Image
                src={project?.image}
                alt="logo"
                width={200}
                height={200}
                className="w-full h-40 aspect-video md:aspect-square"
              />
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 md:px-2">
              <h1 className={cn("text-2xl", raleway.className)}>
                {project?.name}
              </h1>
              <p className={cn(raleway.className, "italic text-center")}>
                {project?.description}
              </p>

              <span className="flex items-center justify-center space-x-6">
                <a target="_blank" href={project?.github}>
                  <button
                    className="flex items-center space-x-2 bg-second py-2 px-4
                 hover:opacity-85 rounded-sm"
                  >
                    <FaGithub />
                    <p>Github</p>
                  </button>
                </a>

                <a target="_blank" href={project.live}>
                  <button
                    className="flex items-center space-x-2 bg-second py-2 px-4
                 hover:opacity-85 rounded-sm"
                  >
                    <LiaLinkSolid />
                    <p>Live</p>
                  </button>
                </a>
              </span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
