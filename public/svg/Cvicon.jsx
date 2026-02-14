import { motion } from "framer-motion";

export default function CvIcon() {
    return (
        <svg
            width="50" height="38.733" viewBox="-39 131 25 20">
            <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 2.2, duration: 1.2, ease: "easeInOut" }}
                d="M-29.227 135.777q-.248-.194-.172-.149-.04-.331-.041-.351t.006-.016q-.016-.242-.027-.274t.01.046-.156-.271-.912-.005-2.011 1.206-2.25 1.675-1.621 1.531-.969 1.591-.439 1.752.219 1.774 1.038 1.74 1.502 1.611 1.694 1.256 1.791.676 1.346.177.842-.049.309-1.59m7.391-11.664q-.034.029-.087-.002t-.13-.097q-.076-.064-.166-.169-.089-.104-.08-.096t.019.019-.184-.231-.268-1.006q.316-.208 1.536 2.454t1.823 4.161.964 2.794.428 2.644q.004-.119.353-3.051t.451-4.546.631-3.134.905-3.136"
                fill="none" stroke="#9aa2ed" strokeWidth="1.961" strokeLinecap="round" strokeLinejoin="round"
            />
        </svg>
    );
}