import { motion } from 'framer-motion';
import {
  navLinksVariants,
  navLinkVariants,
  underlineVariants,
} from '../../animations/framer/variants';
import { useState, forwardRef } from 'react';

const navItems = ['Projets', 'À propos', 'Compétences', 'Contact'];

export const Navigation = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <motion.nav
      ref={ref}
      className="hidden md:flex items-center gap-12"
      variants={navLinksVariants}
      initial="initial"
      animate="animate"
    >
      {navItems.map((item) => (
        <div key={item} className="nav-link-item">
          <NavLink item={item} />
        </div>
      ))}
    </motion.nav>
  );
});

Navigation.displayName = 'Navigation';

const NavLink = ({ item }: { item: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      variants={navLinkVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a 
        href={`#${item.toLowerCase().replace(' ', '-')}`}
        className="text-sm font-medium uppercase tracking-wide text-[#4a1c0a] hover:text-[#3d1810] transition-colors"
      >
        {item}
      </a>
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 bg-[#4a1c0a] origin-left"
        variants={underlineVariants}
        animate={isHovered ? 'visible' : 'hidden'}
      />
    </motion.div>
  );
};
