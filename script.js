function showPopup(content) {
    document.getElementById("popupText").innerText = content;
    document.getElementById("popupOverlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    showPopup('Thank you for your inquiry!');

    this.reset();
});



