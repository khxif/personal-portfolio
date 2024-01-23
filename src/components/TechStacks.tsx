import { icons } from "@/lib/constants";
import TiltDiv from "@/motion/TiltDiv";

export default function TechStacks() {
  return (
    <section
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full mx-auto items-center px-4
       justify-center gap-y-6 md:gap-y-10 gap-x-5 md:gap-x-12 py-10 place-content-center text-center"
    >
      {icons?.map((icon) => (
        <TiltDiv key={icon.id}>
          <div
            className="px-6 md:px-4 py-8 md:py-10 border border-[#ce5ff8]/50 items-center 
        justify-center flex shadow-md shadow-main hover:shadow-xl hover:shadow-main
        transition-all duration-200 ease-linear"
          >
            <icon.icon className="w-16 h-16" />
          </div>
        </TiltDiv>
      ))}
    </section>
  );
}
