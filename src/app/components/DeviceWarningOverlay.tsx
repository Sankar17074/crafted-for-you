'use client';

import { Caveat } from 'next/font/google';
import Smilee from '../../../public/svg/Smilee';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-hand',
});

export default function DeviceWarningOverlay({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#2f2f2f] text-[#f4f2ee] flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
      
      {/* Optional creative icon */}
      <div className="w-24 h-24 mb-6 animate-bounce">
        <Smilee />
      </div>

      <h1 className={`text-3xl md:text-4xl font-bold ${caveat.variable}`}>
       Hey happy face, hold on!
      </h1>
      <p className="mt-4 text-lg md:text-xl leading-relaxed font-[var(--font-hand)]">
        This portfolio is drawn like a sketchbook — it needs a bigger canvas.  
        For the full color-pencil vibe, please open it on a laptop.
      </p>

      <p className="mt-6 text-sm text-gray-400">
         You can still peek, but some strokes may look squished.
      </p>

      <button
        className="mt-6 px-6 py-3 bg-[#9da6ee] text-white rounded-lg hover:bg-[#9da6ee] transition"
        onClick={onContinue}
        >
        Flip the page Anyway
    </button>
    </div>
  );
}
