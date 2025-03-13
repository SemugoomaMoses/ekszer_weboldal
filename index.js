document.addEventListener("DOMContentLoaded", function() {
    // Kép 1 (karkoto.webp)
    document.querySelectorAll(".thumbnail").forEach(img => {
        img.addEventListener("click", function() {
            const kepNeve = this.getAttribute("src"); // A kattintott kép URL-je
            const szoveg2 = "TENNISBOY KARKÖTŐ"; // Az új szöveg
            const szoveg = "Ez egy gyönyörű karkötő, kiváló minőségben!"; // A hozzá tartozó szöveg
            const szoveg3 = "Ez a harmadik szöveg, amit át szeretnénk adni."; // A harmadik szöveg
            
            // Átirányítás a megrendelés oldalra a kép nevével és a szövegekkel
            window.location.href = `megrendel.html?image=${encodeURIComponent(kepNeve)}&text=${encodeURIComponent(szoveg)}&text2=${encodeURIComponent(szoveg2)}&text3=${encodeURIComponent(szoveg3)}`;
        });
    });
});





    // Kép 2 (nyaklanc.webp)
    document.querySelectorAll(".thumbnail2").forEach(img => {
        img.addEventListener("click", function() {
            const kepNeve = this.getAttribute("src"); // A kattintott kép URL-je
            const szoveg = "Ez egy gyönyörű nyaklánc, kiváló minőségben!"; // A hozzá tartozó szöveg
            
            // Átirányítás a megrendelés oldalra a kép nevével és a szöveggel
            window.location.href = `megrendel.html?image=${encodeURIComponent(kepNeve)}&text=${encodeURIComponent(szoveg)}`;
        });
    });

