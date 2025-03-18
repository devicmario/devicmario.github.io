/*// Función anónima para convertir grados Celsius a Kelvin
const cnvCelciusToKelvin = (() => { 
    return (celsius) => celsius + 273.15;
})();

// Función anónima para convertir grados Celsius a Fahrenheit
const cnvCelciusToFarenheit = (() => {
    return (celsius) => (celsius * 1.8) + 32;
})();

// Función anónima de entrada y salida de las conversiones
const ioConvertions = (() => {
    // Variable condicional del bucle
    let checkInput = false;
    // Almacenará la entrada de datos
    let celsius;
    while (!checkInput) {
        // Entrada de datos
        const inputUser = prompt("Introduce una temperatura en grados Celsius:");
        // Casteo de datos a tipo número
        celsius = parseFloat(inputUser);
        if (isNaN(celsius)) {
            console.log("Error: El dato introducido no es de tipo número. Inténtalo de nuevo.");
        } else {
            checkInput = true;
        }
    }
    // Salida de datos
    console.log(`Grados Kelvin: ${cnvCelciusToKelvin(celsius)}`);
    console.log(`Grados Fahrenheit: ${cnvCelciusToFarenheit(celsius)}`);
})();
*/

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.btn-primary.position-fixed');
    if (window.pageYOffset > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});