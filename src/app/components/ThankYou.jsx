import { Playfair_Display, Caveat } from "next/font/google";
import { LinkedinIcon, ThankYouNote } from "../../../public/svg/Thanks";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hand",
});

export default function ThankYouSection() {
  return (
    <section
      className={`${playfair.variable} ${caveat.variable}
      relative min-h-screen bg-[#2f2f2f] text-[#f4f2ee]`}
    >

      {/* ─── SECTION START : vertical dividers only ─── */}
      <div className="relative w-full h-20 mb-20">
        <div className="absolute top-0 left-1/3 h-full w-[0.8px] bg-[#f4efec]" />
        <div className="absolute top-0 left-2/3 h-full w-[0.8px] bg-[#f4efec]" />
        <div className="relative z-10 grid grid-cols-3 h-full items-center
                    px-4 md:px-10 lg:px-20
                    text-sm tracking-wide">

                    {/* add padding-top to keep text away from the horizontal line */}
                    <div className="flex items-center font-medium justify-start m-8 md:m-12 lg:m-15 pt-3">
                        happiness
                    </div>

                    <div className="flex items-center font-medium justify-center pt-3">
                        pencil & paper
                    </div>

                    <div className="flex items-center font-medium justify-end m-10 md:m-6 lg:m-12 pt-3">
                        honest lines
                    </div>

        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT — handwritten svg note */}
        <div className="relative flex justify-center md:justify-start">
          <div className="w-[220px] md:w-[280px] lg:w-[340px]">
            <ThankYouNote className="w-full h-auto" />
          </div>
        </div>

        {/* RIGHT — text + contact */}
        <div className="flex flex-col items-start text-left">

          <h2 className="font-[var(--font-playfair)] text-6xl md:text-7xl leading-tight">
            Thank you.
          </h2>

          {/* Email */}
          <p className="text-base opacity-80 tracking-wider text-[#e6e3dd]">
              sankar2000dass@gmail.com
          </p>

          {/* LinkedIn hand-drawn icon */}
          <div className="mt-6 mb-50 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sankar-dass-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 animate-soft-bounce hover:scale-110 transition"
            >
              <LinkedinIcon className="w-full h-full" />
            </a>
          </div>

          {/* Handwritten line */}
          <p
            className="mt-10 text-lg md:text-xl text-[#9da6ee]
            font-[var(--font-hand)] tracking-wide"
          >
            pick a pencil. let’s scribble something together.
          </p>
        </div>
      </div>
    </section>
  );
}
