/**
 * Language Modal Validation Script
 * 
 * This script helps validate that our language modal implementation
 * works correctly across different device sizes and interaction methods.
 * 
 * To use: Include this script in your development environment and check
 * console logs for validation results.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('--- Language Modal Validation Test ---');
  
  // Track test results
  const testResults = {
    passed: 0,
    failed: 0
  };

  // Test functions
  const runTests = () => {
    try {
      // Check for language button existence
      const langBtn = document.querySelector('.lang-btn');
      if (langBtn) {
        console.log('✅ Language button found');
        testResults.passed++;
      } else {
        console.error('❌ Language button not found');
        testResults.failed++;
      }
      
      // Check for transparent overlay existence
      const transparentLang = document.querySelector('.transparent-lang');
      if (transparentLang) {
        console.log('✅ Transparent language overlay found');
        testResults.passed++;
      } else {
        console.error('❌ Transparent language overlay not found');
        testResults.failed++;
      }
      
      // Verify z-index hierarchy
      const langContainer = document.querySelector('.lang-selector-container');
      const langContainerZIndex = window.getComputedStyle(langContainer).getPropertyValue('z-index');
      const langModalZIndex = window.getComputedStyle(document.querySelector('.languages-box')).getPropertyValue('z-index');
      
      if (parseInt(langModalZIndex) > parseInt(langContainerZIndex)) {
        console.log('✅ Z-index hierarchy correct: modal > container');
        testResults.passed++;
      } else {
        console.error('❌ Z-index hierarchy incorrect');
        testResults.failed++;
      }
      
      // Responsive visibility check
      const checkResponsive = () => {
        const screenWidth = window.innerWidth;
        console.log(`Current screen width: ${screenWidth}px`);
        
        // Output specific layout details for current width
        const langBtnRect = langBtn.getBoundingClientRect();
        console.log(`Lang button position: top=${langBtnRect.top}px, right=${window.innerWidth - langBtnRect.right}px`);
        
        if (transparentLang) {
          const overlayRect = transparentLang.getBoundingClientRect();
          console.log(`Transparent overlay position: top=${overlayRect.top}px, right=${window.innerWidth - overlayRect.right}px`);
          
          // Check alignment
          const verticalDiff = Math.abs(langBtnRect.top - overlayRect.top);
          const horizontalDiff = Math.abs((window.innerWidth - langBtnRect.right) - (window.innerWidth - overlayRect.right));
          
          if (verticalDiff <= 10 && horizontalDiff <= 10) {
            console.log('✅ Language button and overlay are well-aligned');
            testResults.passed++;
          } else {
            console.warn('⚠️ Language button and overlay might be misaligned');
            console.log(`   Vertical difference: ${verticalDiff}px, Horizontal difference: ${horizontalDiff}px`);
          }
        }
      };
      
      // Run responsive test immediately
      checkResponsive();
      
      // Add resize listener for live validation during development
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(checkResponsive, 250); // Debounce
      });
      
      // Check events
      console.log('Event binding verification:');
      console.log('- Click language button to toggle modal');
      console.log('- Click outside to close modal');
      console.log('- Use keyboard (Tab + Enter) to navigate modal');
      
    } catch (error) {
      console.error('Error during validation tests:', error);
      testResults.failed++;
    }
    
    console.log(`--- Test summary: ${testResults.passed} passed, ${testResults.failed} failed ---`);
  };
  
  // Run tests with a slight delay to ensure all components are mounted
  setTimeout(runTests, 500);
});
