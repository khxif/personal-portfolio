import { socials } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Grape_Nuts } from "next/font/google";

const grape_nuts = Grape_Nuts({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer
      className="py-4 px-6 md:px-20 flex items-center justify-between bg-black/90 relative 
    w-full bottom-0"
    >
      <div>
        <h2 className={cn(grape_nuts.className, "text-xl")}>Khaif Mohamed</h2>
      </div>

      <div className="flex items-center space-x-6">
        {socials?.map((social) => (
          <a href={social.url} target="_blank" key={social.id}>
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </footer>
  );
}
