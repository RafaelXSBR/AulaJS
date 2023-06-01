
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 39, 9) return nivel[5];

    if (imc >= 34, 9) return nivel[4];

    if (imc >= 29, 9) return nivel[3];

    if (imc >= 24, 9) return nivel[2];

    if (imc >= 18, 5) return nivel[1];

    if (imc < 18.5) return nivel[0];

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';


    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

}
    /*function recebeEventoForm(evento) {
evento.preventDefault();
const peso = form.querySelector('.peso');
const altura = form.querySelector('.altura');
let IMC = peso.value / (altura.value * 2);
if (IMC < 18, 5) {
    resultado.innerHTML += `<p>IMC: ${IMC} Abaixo do Peso</p>`;
} else if (IMC >= 18, 5 && IMC <= 24, 9) {
    resultado.innerHTML += `<p>IMC: ${IMC} Peso normal</p>`;
} else if (IMC >= 25 && IMC <= 29, 9) {
    resultado.innerHTML += `<p>IMC: ${IMC} Sobrepeso</p>`;
} else if (IMC >= 30 && IMC <= 34, 9) {
    resultado.innerHTML += `<p>IMC: ${IMC} Obesidade Grau 1</p>`;
} else if (IMC >= 35 && IMC <= 39, 9) {
    resultado.innerHTML += `<p>IMC: ${IMC} Obesidade Grau 2</p>`;
} else (IMC > 40){
    resultado.innerHTML += `<p>IMC: ${IMC} Obesidade Grau 3</p>`;
}

}


form.addEventListener('submit', recebeEventoForm);
*/