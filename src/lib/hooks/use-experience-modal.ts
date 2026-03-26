import { useState, useEffect } from 'react';

export const useExperienceModal = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    if (openId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [openId]);

  const open = (id: number) => setOpenId(id);
  const close = () => setOpenId(null);

  return { openId, open, close };
};
