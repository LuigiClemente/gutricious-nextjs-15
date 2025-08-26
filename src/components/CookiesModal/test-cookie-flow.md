# Cookie Modal Flow Test Guide

## Test Scenarios

### 1. Initial Modal Display
- [ ] Clear all cookies and refresh the page
- [ ] Verify the cookie modal appears automatically
- [ ] Verify the modal cannot be closed by clicking outside or pressing ESC

### 2. Navigation to Cookie Policy from Modal
- [ ] From Step 1: Click "Cookie List" link
- [ ] Verify it shows the modal-based Cookie Policy (not a new page)
- [ ] Verify the content matches the standalone Cookie Policy page exactly
- [ ] Verify the "Back to Cookie Preferences" button returns to the main modal
- [ ] Verify the close (X) button returns to the main modal

### 3. Navigation to Privacy Policy from Cookie Policy
- [ ] From modal-based Cookie Policy: Click "Privacy Policy" link
- [ ] Verify it shows the modal-based Privacy Policy (not a new page)
- [ ] Verify the content matches the standalone Privacy Policy page exactly
- [ ] Verify the "Back to Cookie Preferences" button returns to the main modal
- [ ] Verify the close (X) button returns to the main modal

### 4. Navigation to Cookie Policy from Privacy Policy
- [ ] From modal-based Privacy Policy: Click "Cookie Policy" link
- [ ] Verify it shows the modal-based Cookie Policy (not a new page)
- [ ] Verify users can navigate back and forth between the two modal pages

### 5. Navigation from Step 2 (Preferences)
- [ ] From Step 1: Click "Set Cookie Preferences"
- [ ] From Step 2: Click "Cookie List" link
- [ ] Verify it shows the modal-based Cookie Policy
- [ ] Verify all navigation works the same as from Step 1

### 6. Cookie Decision Flow
- [ ] From main modal: Click "Accept and Continue"
- [ ] Verify modal closes and cookie preferences are saved
- [ ] From main modal: Click "Set Cookie Preferences" → Configure → "Save"
- [ ] Verify modal closes and custom preferences are saved
- [ ] Verify modal doesn't reappear after making a decision

### 7. Bypass Prevention
- [ ] Verify users cannot navigate to standalone Cookie/Privacy pages from modal
- [ ] Verify all links within modal-based pages stay within the modal
- [ ] Verify no way to escape to main site without making a cookie choice
- [ ] Verify standalone Cookie/Privacy pages still work normally when accessed directly

### 8. Visual Consistency
- [ ] Compare modal-based Cookie Policy with standalone version
- [ ] Compare modal-based Privacy Policy with standalone version
- [ ] Verify styling, fonts, spacing, and layout match exactly
- [ ] Verify responsive behavior on different screen sizes

## Expected Behavior

✅ **Success Criteria:**
- Users must make a cookie choice to dismiss the modal
- Navigation between Cookie Policy and Privacy Policy stays within modal
- Content matches standalone pages exactly
- All return paths lead back to main cookie modal
- Standalone pages remain unaffected

❌ **Failure Indicators:**
- Users can escape to main site without cookie choice
- Links navigate to standalone pages instead of modal versions
- Content differs between modal and standalone versions
- Modal can be dismissed without making a choice
