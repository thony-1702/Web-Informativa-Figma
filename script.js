document.getElementById('btn-saludo').addEventListener('click', function() {
    alert('¡Gracias por visitarnos!');
});

// Validación básica del formulario
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulario enviado (simulación).');
});