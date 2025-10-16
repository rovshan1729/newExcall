// Force ExCall branding
(function() {
    'use strict';
    
    function applyExCallBranding() {
        // Change page title
        const titleElement = document.getElementById('title');
        if (titleElement) {
            titleElement.textContent = 'ExCall';
        }
        document.title = 'ExCall';
        
        // Change favicon
        const iconElement = document.getElementById('icon');
        if (iconElement) {
            iconElement.href = '../images/logo.png?v=' + Date.now();
        }
        
        // Change apple touch icon
        const appleTouchIconElement = document.getElementById('appleTouchIcon');
        if (appleTouchIconElement) {
            appleTouchIconElement.href = '../images/logo.png?v=' + Date.now();
        }
        
        console.log('ExCall branding applied');
    }
    
    // Apply immediately
    applyExCallBranding();
    
    // Apply on DOMContentLoaded as backup
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyExCallBranding);
    }
    
    // Apply after a short delay as final backup
    setTimeout(applyExCallBranding, 100);
    setTimeout(applyExCallBranding, 500);
})();

