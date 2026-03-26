import type { Variants } from 'framer-motion';

export const headerVariants: Variants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
  scrolled: {
    height: 50,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const logoVariants: Variants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
  hover: {
    rotate: 5,
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
  scrolled: {
    scale: 0.85,
    transition: {
      duration: 0.3,
    },
  },
};

export const navLinksVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

export const navLinkVariants: Variants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -2,
    transition: {
      duration: 0.2,
    },
  },
};

export const underlineVariants: Variants = {
  hidden: {
    width: 0,
    x: -10,
  },
  visible: {
    width: '100%',
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const burgerVariants: Variants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: 90,
    transition: {
      duration: 0.3,
    },
  },
};

export const pageTransitionVariants: Variants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    y: '-100%',
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 1.2,
    },
  },
};

export const pageTransitionNameVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.4,
    },
  },
};

export const pageContentVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};
