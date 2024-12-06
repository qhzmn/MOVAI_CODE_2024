document.getElementById('calc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Veuillez entrer des numéros valides !");
        return;
    }

    let result = performComplexAddition(num1, num2);

    document.getElementById('result').textContent = 'Résultat : ' + result;
});

function performComplexAddition(num1, num2) {
    let sum = 0;

    // Des boucles inutiles pour ralentir l'exécution
    for (let i = 0; i < 1000000; i++) {
        sum += Math.random();  // Opération inutile
    }

    // "Calcul inutile" pour complexifier davantage
    let slowCalculation = 0;
    for (let i = 0; i < 1000000; i++) {
        slowCalculation += Math.sin(i);
    }

    // Réalisation de l'addition avec un délai volontaire
    let delayStart = Date.now();
    while (Date.now() - delayStart < 2000) {
        // Attente de 2 secondes
    }

    // Réaliser réellement l'addition après l'attente
    return num1 + num2;
}



// Script pour l'image rebondissante
var image = document.getElementById('movingImage');
var speedX = Math.random() * 4 + 2; // Vitesse horizontale
var speedY = Math.random() * 4 + 2; // Vitesse verticale
var positionX = 0; // Position initiale horizontale
var positionY = 0; // Position initiale verticale
var directionX = 1; // Direction horizontale
var directionY = 1; // Direction verticale

// Fonction pour déplacer l'image avec rebond
function moveImage() {
  positionX += speedX * directionX;
  positionY += speedY * directionY;

  // Rebonds sur les bords horizontaux
  if (positionX >= window.innerWidth - 100 || positionX <= 0) {
    directionX *= -1; // Change la direction horizontale
    speedX = Math.random() * 4 + 2; // Changer la vitesse aléatoirement
  }

  // Rebonds sur les bords verticaux
  if (positionY >= window.innerHeight - 100 || positionY <= 0) {
    directionY *= -1; // Change la direction verticale
    speedY = Math.random() * 4 + 2; // Changer la vitesse aléatoirement
  }

  // Appliquer la nouvelle position
  image.style.transform = `translate(${positionX}px, ${positionY}px)`;
}

// Déplacer l'image en continu
setInterval(moveImage, 10); // Mettre à jour la position toutes les 10ms

