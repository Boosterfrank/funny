/**
 * Hide Distractions
 *
 * This script creates a simple, floating UI element that, when clicked, hides or shows
 * common distracting elements on a webpage.
 *
 * How to use:
 * 1. Copy the entire code.
 * 2. Open the developer console (F12 or Cmd+Option+I) on any webpage.
 * 3. Paste the code into the console and press Enter.
 *
 * The script uses an IIFE (Immediately Invoked Function Expression) to avoid
 * polluting the global namespace.
 */

(function () {
  // Check if the UI has already been added to the page to prevent duplicates.
  if (document.getElementById('hide-distractions-ui')) {
    console.log('Hide Distractions UI is already on the page.');
    return;
  }

  // Define a set of CSS selectors for common distracting elements.
  // This can be customized for specific websites.
  const distractingSelectors = [
    // General ad and sidebar selectors
    '[id*="ad"]',
    '[class*="ad"]',
    '[id*="promo"]',
    '[class*="promo"]',
    '[id*="banner"]',
    '[class*="banner"]',
    '.sidebar',
    '.social-media-icons',

    // Specific selectors for common sites (e.g., social media feeds, sidebars, comments)
    'ytd-comments', // YouTube comments
    '#related', // YouTube related videos sidebar
    '[aria-label*="Promoted"]', // Promoted posts on various sites
    '.feed', // Social media feeds
    '[class*="comments"]', // General comment sections
  ];

  // Create the UI container element.
  const uiContainer = document.createElement('div');
  uiContainer.id = 'hide-distractions-ui';
  uiContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    font-family: 'Inter', sans-serif;
  `;

  // Create the toggle button.
  const toggleButton = document.createElement('button');
  toggleButton.id = 'toggle-button';
  toggleButton.textContent = 'Hide Distractions';
  toggleButton.style.cssText = `
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    background-color: #3b82f6; /* Tailwind blue-500 */
    border: none;
    border-radius: 9999px; /* Tailwind rounded-full */
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  `;

  // Add a hover effect for a better user experience.
  toggleButton.onmouseover = () => {
    toggleButton.style.backgroundColor = '#2563eb'; // Tailwind blue-600
  };
  toggleButton.onmouseout = () => {
    toggleButton.style.backgroundColor = '#3b82f6'; // Tailwind blue-500
  };

  // Append the button to the container.
  uiContainer.appendChild(toggleButton);

  // Append the container to the document body.
  document.body.appendChild(uiContainer);

  // Variable to track the state of the UI.
  let isHidden = false;
  const hiddenElements = [];

  /**
   * Toggles the visibility of distracting elements.
   */
  function toggleDistractions() {
    if (isHidden) {
      // If elements are hidden, show them.
      hiddenElements.forEach(el => {
        el.style.display = el.getAttribute('data-original-display');
        el.removeAttribute('data-original-display');
      });
      hiddenElements.length = 0; // Clear the array
      toggleButton.textContent = 'Hide Distractions';
      console.log('Distracting items are now visible.');
    } else {
      // If elements are visible, hide them.
      distractingSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (
            el.contains(uiContainer) || // Don't hide the UI button itself
            el.tagName === 'BODY' ||    // Don't hide the body
            el.tagName === 'HTML'
          ) {
            return;
          }

          // Store the original display property before hiding.
          const originalDisplay = window.getComputedStyle(el).display;
          el.setAttribute('data-original-display', originalDisplay);

          // Set display to 'none' to hide the element.
          el.style.display = 'none';
          hiddenElements.push(el);
        });
      });
      toggleButton.textContent = 'Show Distractions';
      console.log('Distracting items are now hidden.');
    }
    isHidden = !isHidden;
  }

  // Add a click event listener to the toggle button.
  toggleButton.addEventListener('click', toggleDistractions);
})();
