function openImagePage() {
    // The path to the image, and any text you want to pass
    const kep = "karkoto.webp";  // Path to the image
    const szoveg = "DC-COURT GRAFFIK UNISEX - Skate shoes";
    const szoveg2 = "20000Ft";  // Some text to pass
 
    // Create the URL for the second page (megrendel.html)
    const url = `megrendel.html?image=${encodeURIComponent(kep)}&text=${encodeURIComponent(szoveg)}`;
 
    // Navigate to the new page
    window.location.href = url;
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".karkoto").forEach(img => {
        img.addEventListener("click", function() {
            window.location.href = "megrendel.html"; // Átirányítás a megfelelő oldalra
        });
    });
});

