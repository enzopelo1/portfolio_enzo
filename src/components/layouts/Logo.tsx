import { motion } from 'framer-motion';
import { logoVariants } from '../../animations/framer/variants';
import { forwardRef } from 'react';

interface LogoProps {
  letterLRef?: React.RefObject<HTMLSpanElement | null>;
}

export const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ letterLRef }, ref) => {
    return (
      <motion.a
        ref={ref}
        href="/"
        className="text-6xl text-[#4a1c0a] cursor-pointer"
        style={{ fontFamily: "'Modak', cursive" }}
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <span>E</span>
        <span
          ref={letterLRef as React.RefObject<HTMLSpanElement>}
          className="inline-block"
        >
          L
        </span>
      </motion.a>
    );
  }
);

Logo.displayName = 'Logo';

