'use client'

import { useEffect, useState } from 'react'

type ScrollDownArrowProps = {
  navOpen?: boolean;
}

/**
 * ScrollDownArrow - A simple down arrow that's only shown on desktop/tablet devices
 * and disappears when scrolled down or when navigation is open.
 * 
 * This component is meant to be imported with dynamic import and { ssr: false }
 */
const ScrollDownArrow = ({ navOpen = false }: ScrollDownArrowProps) => {
  // Track if we're on client-side
  const [isClient, setIsClient] = useState(false)
  // Track if user has scrolled down
  const [hasScrolled, setHasScrolled] = useState(false)
  // Track if we're on mobile
  const [isMobile, setIsMobile] = useState(false)

  // Only run this once on client-side
  useEffect(() => {
    setIsClient(true)
    
    // Initial check
    const checkDevice = () => setIsMobile(window.innerWidth < 768)
    const checkScroll = () => setHasScrolled(window.scrollY > 50)
    
    checkDevice()
    checkScroll()
    
    // Set up listeners
    window.addEventListener('resize', checkDevice)
    window.addEventListener('scroll', checkScroll)
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  // Scroll handler
  const handleScrollDown = () => {
    const viewportHeight = window.innerHeight
    window.scrollTo({
      top: viewportHeight * 0.7,
      behavior: 'smooth'
    })
  }
  
  // Don't render anything on server or if conditions aren't met
  if (!isClient || isMobile || hasScrolled || navOpen) {
    return null
  }
  
  // Only shown on client-side and only when needed
  return (
    <div
      className="fixed z-50 right-8 flex flex-col gap-3"
      style={{
        opacity: 1,
        position: 'fixed',
        top: '25vh',
        pointerEvents: 'auto',
        visibility: 'visible',
        transform: 'translateZ(0)'
      }}
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
