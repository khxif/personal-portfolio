"use client";

import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex items-center justify-end space-x-10">
      {navLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          <motion.h1
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: link.id, ease: "linear" }}
            className={cn(pathname === link.href && "active", "link pb-2")}
          >
            <link.icon />
            <p className="font-bold">{link.label}</p>
          </motion.h1>
        </Link>
      ))}
    </div>
  );
}
