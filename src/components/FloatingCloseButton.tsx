'use client';

import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

// Styled component for the floating close button
const StyledCloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

interface FloatingCloseButtonProps {
  locale: string;
}

export default function FloatingCloseButton({ locale }: FloatingCloseButtonProps) {
  const router = useRouter();

  const handleClose = () => {
    router.push(`/${locale}/terms`);
  };

  return (
    <StyledCloseButton onClick={handleClose} aria-label="Close article">
      <IoMdClose />
    </StyledCloseButton>
  );
}
