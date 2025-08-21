'use client';

import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useRouter } from 'next/navigation';

// CSS class for the floating close button will be defined in globals.css

interface FloatingCloseButtonProps {
  locale: string;
}

export default function FloatingCloseButton({ locale }: FloatingCloseButtonProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleClose = () => {
    router.push(`/${locale}/terms`);
  };

  return (
    <button 
      onClick={handleClose} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Close article"
      className="floating-close-button"
      style={{
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        background: isHovered ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)'
      }}
    >
      <IoMdClose />
    </button>
  );
}
