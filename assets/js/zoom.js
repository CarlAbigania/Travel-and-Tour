function toggleZoom(img) {
    img.classList.toggle('zoomed');
}

// Add event listener to spot hero images
document.addEventListener('DOMContentLoaded', () => {
    const spotImg = document.querySelector('.spot-hero img');
    if (spotImg) {
        spotImg.addEventListener('click', () => toggleZoom(spotImg));
    }
});
