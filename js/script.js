const cambioLuce = document.querySelector('.luce');
const pulsante = document.querySelector('.on_off');

pulsante.addEventListener('click', function() {
    cambioLuce.classList.toggle('accesa');
    document.body.classList.toggle('accesa');
    if (cambioLuce.classList.contains('accesa')) {
        cambioLuce.src = "img/yellow_lamp.png";
        pulsante.textContent = "Spegni";
    } else {
        cambioLuce.src = "img/white_lamp.png";
        pulsante.textContent = "Accendi";
    }
});