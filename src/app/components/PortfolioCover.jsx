'use client';

import { Playfair_Display, Caveat } from "next/font/google";
import CvIcon from "../../../public/svg/Cvicon";
import StarIcon from "../../../public/svg/Starportfolio";
import Scribble from "../../../public/svg/Scribble";
import Smilee from "../../../public/svg/Smilee";
import Name from "../../../public/svg/Name";
import Handcircle from "../../../public/svg/Handcircle";
import { useInView } from "./hooks/useInView";
import { motion } from "framer-motion";

/* Fonts (inline to component) */
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-hand",
});

export default function PortfolioCover() {

         const { ref, isVisible } = useInView({ threshold: 0.3 });
    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className={`${playfair.variable} ${caveat.variable} relative min-h-screen bg-[#2f2f2f] text-[#f4f2ee] overflow-hidden flex flex-col pb-15`}
        >
            <div className="relative w-full h-24 text-[#f4efec]">

                {/* Horizontal line - centered and responsive */}
                <div className="absolute top-1/2 left-0 w-full h-[0.8px] bg-[#f4efec] translate-y-1/2" />

                {/* Vertical dividers */}
                <div className="absolute top-0 left-1/3 h-24 w-[0.8px] bg-[#f4efec]" />
                <div className="absolute top-0 left-2/3 h-24 w-[0.8px] bg-[#f4efec]" />

                {/* Text */}
                <div className="relative z-10 grid grid-cols-3 h-full items-center
                    px-4 md:px-10 lg:px-20
                    text-sm tracking-wide">

                    {/* add padding-top to keep text away from the horizontal line */}
                    <div className="flex items-center font-medium justify-start m-8 md:m-12 lg:m-15 pt-3">
                    {new Date().getFullYear()}
                    </div>

                    <div className="flex items-center font-medium justify-center pt-3">
                        curriculum vitae
                    </div>

                    <div className="flex items-center font-medium justify-end m-10 md:m-6 lg:m-12 pt-3">
                        sankar dass s
                    </div>

                </div>
            </div>

            {/* ---------- CENTER CONTENT ---------- */}
            <div className="relative mt-50 z-10 flex flex-col items-center">
                <span className="relative inline-block">
                    {/* NAME – positioned ABOVE the word */}
                    <span className="
                            absolute
                            left-1/2
                            -translate-x-1/2
                            -top-[9.5rem]
                            w-max
                            pointer-events-none
                        ">
                            <Name />
                        </span>
                    </span>
                <h1 className="font-[var(--font-playfair)] text-[10rem] leading-none tracking-tight">
                    P
                    <span className="relative inline-block mx-2">
                        o
                        <span className="absolute inset-0 flex items-center justify-center">
                            <CvIcon />
                        </span>
                    </span>
                    rtf
                    <span className="relative inline-block mx-2">
                        o
                        <span className="absolute inset-0 flex items-center justify-center">
                            <StarIcon />
                        </span>
                    </span>
                    l
                    <span className="relative inline-block mx-2">
                        i
                        <span className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[0.4em]">
                            <span className="w-[0.55em] h-[0.55em]">
                                <Scribble />
                            </span>
                        </span>
                    </span>
                    <span className="relative inline-block mx-2">
                        o
                        <span className="absolute right-[-0.35em] bottom-[0.05em]">
                            <span className="w-[0.45em] h-[0.45em]">
                                <Smilee />
                            </span>
                        </span>
                    </span>
                </h1>
                <div className="relative mt-10 inline-block px-10 py-6">
                    <span className="absolute inset-0 -z-0">
                     <Handcircle/>  
                    </span>
                    <span className="relative z-10 font-[var(--font-playfair)] text-3xl tracking-wide text-neutral-200">
                        Frontend Engineer
                    </span>
                </div>
            </div>
            <div className="mt-auto w-full h-[0.8px] bg-[#f4efec] z-20" />
        </motion.section>
    );
}
