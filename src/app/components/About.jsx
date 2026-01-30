'use client';

import Creative from "../../../public/svg/Creative";
import DetailOrientedIcon from "../../../public/svg/Detail-oriented";
import FastLearner from "../../../public/svg/FastLearner";
import Motivated from "../../../public/svg/Motivated";
import { useInView } from "./hooks/useInView";
import MultiLineUnderline from "./MultiLineUnderliner";

export default function About() {

     const { ref, isVisible } = useInView({ threshold: 0.3 });

  return (
    <section 
    ref={ref}
    className={`min-h-screen bg-[#f8f6f4] flex items-center px-6 md:px-16  transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT – PHOTO */}
        <div className="relative flex justify-center">
          
          {/* Image */}
          <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-full overflow-hidden grayscale z-10">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
             
          </div>         

          {/* Floating words */}
          <span className="absolute -top-6 left-0 text-purple-400 text-2xl patrick-hand">
           <Creative/>
          </span>

          <span className="absolute -top-4 right-0 text-purple-400 text-2xl patrick-hand">
           <DetailOrientedIcon/>
          </span>

          <span className="absolute bottom-0 -left-6 text-purple-400 text-2xl patrick-hand">
           <Motivated/>
          </span>

          <span className="absolute bottom-0 -right-8 text-purple-400 text-2xl patrick-hand">
            <FastLearner/>
          </span>
        </div>

        {/* RIGHT – TEXT */}
        <div className="max-w-xl">
          <h1 className="text-6xl md:text-7xl font-serif text-gray-900">
            Hello,
          </h1>

          <p className="mt-6 text-xl text-gray-700 leading-relaxed font-serif">
           I’m a Frontend Developer based in Chennai, where technology meets my love for art and design.
           <MultiLineUnderline animate={isVisible}> I enjoy shaping ideas into digital experiences that feel calm, thoughtful, and intuitive.</MultiLineUnderline>
           where creativity and problem-solving move together in quiet harmony.
          </p>

          <p className="mt-6 text-xl text-gray-700 leading-relaxed font-serif">
         Beyond screens and code, I’m drawn to slower joys.I’m someone who believes in the beauty of small gestures — handwritten notes, meaningful gifts, and words that stay long after they’re read
           <MultiLineUnderline animate={isVisible}>
             For me, learning never really stops; it shows up in new challenges, fresh perspectives, and moments that gently push me to grow.
            </MultiLineUnderline>
          </p>
        </div>

      </div>
    </section>
  );
}
