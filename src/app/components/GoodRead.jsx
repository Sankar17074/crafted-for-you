'use client';

import { QuoteFour, QuoteOne, QuoteThree, QuoteTwo, Star} from "../../../public/svg/Handquotes";
import { useInView } from "./hooks/useInView";
import MultiLineUnderline from "./MultiLineUnderliner";

export default function GoodRead() {

    const { ref, isVisible } = useInView({ threshold: 0.3 });

    function HandSvgWrapper({ children, className = "" }) {
        return (
            <div className={`w-[160px] md:w-[220px] lg:w-[280px] ${className}`}>
            <div className="w-full h-auto">{children}</div>
            </div>
        );
    }
  return (
      <section 
        ref={ref}
        className={`min-h-[var(--vh)] bg-[#f8f6f4] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} flex flex-col px-6 md:px-16`}
      >

      {/* Separator line */}
     <div className="mt-auto relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-[0.8px] bg-[#81807c] z-20" />

      {/* Content */}
      <div className="flex-1 flex items-center">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start w-full">

          {/* LEFT – TEXT CONTENT */}
          <div className="max-w-xl">

            <h2 className="text-7xl md:text-6xl font-serif text-gray-900">
              Good reads, good builds.
            </h2>

            <p className="mt-8 text-xl text-gray-700 leading-relaxed font-serif">
              I enjoy turning vague ideas into something that feels calm, usable,
              and intentional. I don’t rush to be perfect — I believe clarity
              comes through iteration.
              <br />
              <br />
              Skills can be learned. Tools will change.
              What matters to me is curiosity, attention to detail, and caring
              enough to simplify things that don’t need to be complex.
              <br />
              <br />
              I like building interfaces that feel obvious, respectful of the
              user’s time, and quietly well-thought-out.
            </p>

            {/* Small line with hand underlined */}
            <div className="mt-16 inline-block text-lg md:text-xl text-gray-700 font-serif">
                <MultiLineUnderline animate={isVisible}>
                    Still learning. Still refining. Always interested.
                </MultiLineUnderline>
            </div>
          </div>

          {/* RIGHT – SCRIBBLES (INTENTIONALLY EMPTY FOR NOW) */}
        <div className="relative min-h-[300px] md:min-h-[500px]">
            <HandSvgWrapper className="absolute top-4 left-0 rotate-[-3deg]">
                <QuoteOne />
            </HandSvgWrapper>

            <HandSvgWrapper className="absolute top-16 right-[-60] rotate-[2deg]">
                <QuoteTwo />
            </HandSvgWrapper>
            {/* <HandSvgWrapper className="absolute top-32 left-20 rotate-[-1deg]">
                <MusicIcon />
            </HandSvgWrapper> */}
            <HandSvgWrapper className="absolute top-54 left-10 rotate-[6deg]">
                <QuoteThree />
            </HandSvgWrapper>

            <HandSvgWrapper className="absolute bottom-[-130] right-0">
                <QuoteFour/>
            </HandSvgWrapper>
            <HandSvgWrapper className="absolute bottom-[-120] left-0 rotate-[-4deg]">
                <Star />
            </HandSvgWrapper>
</div>
        </div>
      </div>
    </section>
  );
}