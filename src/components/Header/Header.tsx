"use client";

import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import NavLinks from "./NavLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ref = useRef(null);
  const pathname = usePathname();

  useClickAway(ref, () => setIsOpen(false));
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const scrollThreshold = 100;

      if (offset > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      ref={ref}
      className={cn(
        isOpen ? "bg-[#191528]" : "bg-transparent",
        scrolled && "bg-[#191528]",
        "flex flex-col px-4 md:px-20 text-white sticky top-0  items-end py-8 z-50 mb-4"
      )}
    >
      <NavLinks />

      <div
        className={cn(
          isOpen ? "bg-[#191528]" : "bg-transparent",
          "md:hidden w-full absolute z-50"
        )}
      >
        <span className="flex justify-end text-[#cd5ef7] ">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </span>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100%" }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col space-y-6 h-full pb-4 items-center justify-center z-50"
            >
              {navLinks.map((link) => (
                <Link key={link.id} href={link.href}>
                  <h1 className={cn("link pb-2")}>
                    <link.icon />
                    <p className="font-bold">{link.label}</p>
                  </h1>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
