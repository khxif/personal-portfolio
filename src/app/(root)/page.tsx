import { TypeWriterEffect } from '@/components/core/type-writer-effect';
import Image from 'next/image';
import Link from 'next/link';
import { Zoom } from 'react-awesome-reveal';

export default function HomePage() {
  return (
    <main
      className="w-full h-full flex flex-col md:flex-row items-center justify-between space-y-10
     md:space-y-0 p-8 -z-50"
    >
      <section
        className="flex flex-col py-10 md:py-0 items-center md:items-start md:pl-10 justify-center md:w-1/2 
      h-full space-y-6"
      >
        <h1 className="font-medium text-3xl sm:text-4xl md:text-6xl">Khaif Mohamed</h1>
        <span className="text-[#c95df2] text-2xl md:text-3xl">
          <TypeWriterEffect />
        </span>
        <span className="text-base md:text-lg italic">Based on Kerala,India</span>
        <Link href="/contact">
          <button
            className="bg-[#c95df2] px-8 sm:px-10 py-2.5 sm:py-4 hover:bg-transparent border border-solid
        border-[#c95df2] font-semibold my-4 text-lg transition-all duration-200 ease-in rounded-sm"
          >
            Get in Touch!
          </button>
        </Link>
      </section>

      <Zoom
        duration={600}
        className="flex items-center h-full justify-center mt-auto md:w-1/2 py-4"
      >
        <Image src="/home-main.svg" alt="home" width={500} height={400} loading="eager" />
      </Zoom>
    </main>
  );
}
