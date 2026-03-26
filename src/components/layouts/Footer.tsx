import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:hanzoleprince62@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/enzo-leprince-6a1721253/',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/enzopelo1',
  },
];

const quickLinks = [
  { name: 'Projets', href: '#projets' },
  { name: 'À propos', href: '#à-propos' },
  { name: 'Compétences', href: '#compétences' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#4a1c0a] text-[#FAF0E6] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FAF0E6]/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <motion.div
          className="py-12 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            {/* Left - Quick Links */}
            <motion.div className="flex flex-wrap items-center gap-x-6 gap-y-3" variants={itemVariants}>
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#FAF0E6]/60 hover:text-[#FAF0E6] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>

            {/* Right - Social Links */}
            <motion.div className="flex items-center gap-4" variants={itemVariants}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2 border border-[#FAF0E6]/20 rounded-lg hover:border-[#FAF0E6]/40 hover:bg-[#FAF0E6]/5 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom - Copyright & Back to top */}
          <motion.div variants={itemVariants}>
            <div className="h-px bg-[#FAF0E6]/10 mb-6" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#FAF0E6]/40">
                © 2026 Enzo Leprince · Conçu avec React, TypeScript & Framer Motion
              </p>

              <motion.button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-xs text-[#FAF0E6]/50 hover:text-[#FAF0E6] transition-colors duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span>Retour en haut</span>
                <ArrowUp className="w-3 h-3" strokeWidth={2} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
