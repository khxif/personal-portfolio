import TechStacks from "@/components/TechStacks";
import TiltDiv from "@/motion/TiltDiv";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="px-4 md:px-10">
      <section
        className="flex flex-col md:flex-row items-center justify-between 
        space-y-6 md:space-y-0 py-2 md:py-10"
      >
        <div className="flex flex-col space-y-4 md:w-1/2 m-4">
          <h1 className="flex half-underline items-center font-light space-x-4 text-4xl py-4 ">
            <span className="">About</span>
            <span className="font-bold text-main">Me!</span>
          </h1>

          <div className="flex flex-col space-y-6 items-center text-lg leading-10">
            <p className="">
              Hey, I&apos;m{" "}
              <span className="text-main italic text-lg">Khaif Mohamed</span>{" "}
              from <span className="text-main italic">Varkala,Kerala.</span> I
              am currently pursuing Btech CSE(2022-26). Also I develop Projects
              and contribute to Open Source.
            </p>
            <p>
              I am fluent in{" "}
              <span className="text-main italic">Javascript</span> and
              <span className="text-main italic">javascript libraries.</span> I
              have a keen interest on frontend JS libraries and frameworks like
              <span className="text-main italic">React.js and Next.js.</span>
            </p>

            <p>
              Whenever possible I try to improve my{" "}
              <span className="text-main italic">JS skills</span> and apply it
              on building{" "}
              <span className="text-main italic">full stack products.</span>
              Also I am passionate about building{" "}
              <span className="text-main italic">real world products</span>
            </p>
          </div>
        </div>

        <div className="md:w-1/2 p-4 flex flex-col space-y-6 items-center justify-center">
          <TiltDiv>
            <Image
              src="/avatar.svg"
              alt="avatar"
              width={200}
              height={200}
              priority
              quality={100}
              className="mb-4"
            />
          </TiltDiv>

          <div className="flex flex-col space-y-4 items-center">
            <h2 className="font-medium text-xl">Download my resume.</h2>
            <button className="px-10 py-3 bg-transparent border border-main">
              Download
            </button>
          </div>
        </div>
      </section>

      <section className="py-2 md:py-10">
        <h1 className="flex items-center font-light text-4xl py-4 space-x-1 half-underline">
          <span className="">Skill</span>
          <span className="font-medium text-main">sets</span>
        </h1>

        <TechStacks />
      </section>
    </main>
  );
}
