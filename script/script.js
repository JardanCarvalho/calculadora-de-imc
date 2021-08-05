let calcResult = document.getElementById("calcResult");

function imc() {
    let heigth = document.getElementById("heigth").value;
    let weigth = document.getElementById("weigth").value;
    let calculate = document.getElementById("calculate");

    if (heigth !== '' && weigth !== '') {
        const imcValue = (weigth / (heigth * heigth)).toFixed(2);
        let classification = "";

        if (imcValue < 18.5) {
            classification = "abaixo do peso. Consulte um profissional de saúde."
        } else if (imcValue < 25) {
            classification = "com o peso ideal."
        } else if (imcValue < 30) {
            classification = "você está um pouco acima do peso. Consulte um profissional de saúde."
        } else if (imcValue < 35) {
            classification = "você está com obesidade grau I. Consulte um profissional de saúde."
        } else if (imcValue < 40) {
            classification = "você está com obesidade grau II. Consulte um profissional de saúde."
        } else {
            classification = "você está com obesidade grau III. Consulte um profissional de saúde."
        }

        calcResult.textContent = `Seu IMC é: ${imcValue} e você está ${classification}`;


    } else {
        calcResult.textContent = 'Preencha todos os campos.';
    }

}

calculate.addEventListener("click", imc);