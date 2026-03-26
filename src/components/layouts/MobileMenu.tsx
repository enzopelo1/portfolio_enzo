import { motion, AnimatePresence } from 'framer-motion';
import {
  mobileMenuVariants,
  navLinkVariants,
} from '../../animations/framer/variants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = ['Projets', 'À propos', 'Compétences', 'Contact'];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop invisible mais cliquable pour fermer le menu */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[1px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          {/* Carte du Menu */}
          {/* Positionnée en absolute par rapport au wrapper du bouton burger dans le Header */}
          {/* Les valeurs négatives top/right permettent de créer une marge autour de la croix pour qu'elle soit "dans" le menu */}
          <motion.div
            className="absolute -top-6 -right-6 z-[60] bg-white rounded-[2rem] shadow-2xl p-8 pt-16 min-w-[260px]"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Liste des liens */}
            <nav className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="flex items-center gap-3 text-2xl font-medium text-[#4a1c0a] hover:text-[#3d1810] transition-colors group"
                  variants={navLinkVariants}
                  custom={index}
                  onClick={onClose}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
