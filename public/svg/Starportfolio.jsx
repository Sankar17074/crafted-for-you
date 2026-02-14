import { motion } from "framer-motion";

export default function StarIcon() {
  return (
     <svg
              width="40"
              height="40"
              viewBox="0 0 60 60"
              fill="none"
              stroke="#9da6ee"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path 
              d="M30 5 Q35 29, 50 30 Q35 30, 30 55 Q25 30, 10 30 Q25 30, 30 5 Z" 
              initial={{ pathLength: 0, opacity: 0}}
              animate={{ pathLength: 1, opacity: 1}}
              transition={{ delay: 2.2, duration: 1.2, ease: "easeInOut" }}
              />
            </svg>
  );
}