import { motion } from 'framer-motion';
import { navLinkVariants, underlineVariants } from '../../animations/framer/variants';
import { useState, forwardRef } from 'react';

export const ContactLink = forwardRef<HTMLDivElement>((_props, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer"
      variants={navLinkVariants}
      initial="initial"
      animate="animate"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className="text-sm font-medium uppercase tracking-wide text-[#3A3A3A] hover:text-[#1A1A1A] transition-colors">
        Contact
      </span>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-[#1A1A1A] origin-left"
        variants={underlineVariants}
        animate={isHovered ? 'visible' : 'hidden'}
      />
    </motion.div>
  );
});

ContactLink.displayName = 'ContactLink';
