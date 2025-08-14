import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import { useTranslations } from '@/components/SimpleTranslationProvider';
import styled from 'styled-components';

// Styled component for the floating close button
const FloatingCloseButton = styled.button`
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

// Custom styles for the modal
const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    margin: '0',
    padding: '20px',
    border: 'none',
    background: 'var(--color-secondary-dark)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
    transition: 'transform 0.5s ease-out', // Smooth transition for 0.5 seconds
    transform: 'translateY(-100vh)', // Start above the viewport
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 10000,
    transition: 'opacity 0.5s ease-out', // Fade in transition for overlay
    opacity: 0, // Start with transparent overlay
  },
};

function ModalComponent({ isOpen, onRequestClose } : any) {
  const [afterOpen, setAfterOpen] = useState(false);
const t = useTranslations('Index');


  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Delay the slide-in effect to sync with the modal opening
      const timer = setTimeout(() => {
        setAfterOpen(true);
      }, 10); // Start shortly after modal opens

      return () => clearTimeout(timer);
    } else {
      setAfterOpen(false); // Reset when modal closes
    }
  }, [isOpen]);

  const finalStyles = {
    ...customStyles,
    content: {
      ...customStyles.content,
      transform: afterOpen ? 'translateY(0)' : 'translateY(-100vh)',
    },
    overlay: {
      ...customStyles.overlay,
      opacity: afterOpen ? 1 : 0,
    },
  };
  const htmlContent = t.raw('answerText');
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    // Close modal first
    onRequestClose();
    
    // Then scroll to question section after a delay
    setTimeout(() => {
      const questionSection = document.getElementById('question-section');
      console.log('Question section found:', questionSection);
      if (questionSection) {
        questionSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  // Create a global function for the Get Started button
  useEffect(() => {
    // Define the function on the window object
    (window as any).handleGetStartedFromModal = () => {
      console.log('Get Started button clicked from modal');
      // Close modal first
      onRequestClose();
      
      // Then scroll to footer after a delay
      setTimeout(() => {
        const footer = document.getElementById('footer');
        console.log('Footer element found:', footer);
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    };

    // Cleanup function
    return () => {
      delete (window as any).handleGetStartedFromModal;
    };
  }, [onRequestClose]);

  return (
    <>
      {isOpen && (
        <FloatingCloseButton onClick={handleClose} aria-label="Close modal">
          <IoMdClose />
        </FloatingCloseButton>
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={finalStyles as any}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
      >
        <div 
          ref={modalContentRef}
          className="text-black text-3xl mx-auto modal-text max-h-screen my-8 py-20" 
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
      </Modal>
    </>
  );
}

export default ModalComponent;
