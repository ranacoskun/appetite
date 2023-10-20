
// Use a window.onload event listener to ensure the document is ready
function changeStyle(styleName) {
    // Create a new link element for the selected style
    const newStyleLink = document.createElement('link');
    newStyleLink.rel = 'stylesheet';
    newStyleLink.href = styleName;
    newStyleLink.type = 'text/css';

    // Find the existing link element with the 'selected-style' id
    const existingStyleLink = document.querySelector('link#selected-style');

    // Replace the existing link element with the new one
    if (existingStyleLink) {
        existingStyleLink.parentNode.replaceChild(newStyleLink, existingStyleLink);
    } else {
        // If 'selected-style' link doesn't exist, add the new link to the head
        document.head.appendChild(newStyleLink);
    }
}


function setDefaultStyle() {
    // Call the changeStyle function with the default CSS file on page load
    changeStyle('../css/minimalism.css');
}

// Call the setDefaultStyle function when the page loads
window.onload = setDefaultStyle;



