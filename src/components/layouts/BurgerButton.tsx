import { motion } from 'framer-motion';
import { burgerVariants } from '../../animations/framer/variants';
import { forwardRef } from 'react';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const BurgerButton = forwardRef<HTMLButtonElement, BurgerButtonProps>(
  ({ isOpen, onClick, className = '' }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={`flex flex-col gap-1.5 cursor-pointer z-50 ${className}`}
        variants={burgerVariants}
        animate={isOpen ? 'open' : 'closed'}
        onClick={onClick}
        aria-label="Toggle menu"
      >
        <motion.span
          className="w-6 h-0.5 bg-[#4a1c0a]"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-[#4a1c0a]"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-[#4a1c0a]"
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        />
      </motion.button>
    );
  }
);

BurgerButton.displayName = 'BurgerButton';
