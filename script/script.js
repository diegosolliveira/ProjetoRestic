document.getElementById('menu-toggle').onclick = function() {
    const menu = document.getElementById('menu');
    
    if (menu.style.maxHeight) {
        menu.style.maxHeight = null;
    } else {
        menu.style.display = 'flex';
        menu.style.maxHeight = '300px';
    }

    menu.classList.toggle('open');
};


function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const imc = weight / (height * height);
    let category = '';

    if (imc < 18.5) {
        category = 'Baixo peso';
    } else if (imc < 24.9) {
        category = 'Peso normal';
    } else if (imc < 29.9) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidade';
    }

    document.getElementById('imc-result').innerText = `Seu IMC é ${imc.toFixed(2)} - Categoria: ${category}`;
}

function toggleDetails(card) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(c => {
        if (c !== card) {
            c.classList.remove('active');
        }
    });
    card.classList.toggle('active');
}
