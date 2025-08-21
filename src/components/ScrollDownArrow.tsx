'use client'

import { useEffect, useState } from 'react'

type ScrollDownArrowProps = {
  navOpen?: boolean;
}

const ScrollDownArrow = ({ navOpen = false }: ScrollDownArrowProps) => {
  const [showUpArrow, setShowUpArrow] = useState(false)
  
  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShowUpArrow(true)
      else setShowUpArrow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollDown = () => {
    // Calculate a position just below the first viewport
    const viewportHeight = window.innerHeight;
    const targetPosition = viewportHeight * 0.7; // 70% of the viewport height
    window.scrollTo({ top: targetPosition, behavior: 'smooth' })
  }
  
  return (
    <div
      className={`fixed z-50 top-8 right-8 flex-col gap-3 ${!showUpArrow && !navOpen ? 'flex': 'hidden'}`}
    >
      <button
        aria-label="Scroll Down"
        onClick={handleScrollDown}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300"
      >
        <svg className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default ScrollDownArrow
