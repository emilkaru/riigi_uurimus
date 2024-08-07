function enableIframe() {
    let overlay = document.querySelector('.iframe-overlay');
    overlay.style.pointerEvents = 'none'; // Disables the overlay's mouse events
    document.getElementById('map-instruction').textContent = "";
}

function disableIframe(e) {
    // Check if the click is outside the iframe container
    if (!e.target.closest('#G-maps-container')) {
        var overlay = document.querySelector('.iframe-overlay');
        overlay.style.pointerEvents = 'auto'; // Re-enables the overlay
    }
}

document.addEventListener('click', disableIframe);