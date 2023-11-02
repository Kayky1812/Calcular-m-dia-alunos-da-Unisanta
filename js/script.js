"use strict"; // para garantir que eu nao use uma variavel que nao foi declarada

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const btnCalcular = document.getElementById("btnCalcular");
const saida = document.getElementById("saida");

function obterNotaP1() {                //arrow function seria  let obterNotaP1 = () => p1.value;
    return parseFloat(p1.value);
}

function obterNotaP2() {                 //arrow function seria  let obterNotaP2 = () => p2.value;
    return parseFloat(p2.value);
}

function calcularMedia(notaP1, notaP2) {
    let media = (notaP1 + 2 * notaP2) / 3;
    return media;
}

function validaNotap1(notaP1) {
    if (notaP1 < 0 || notaP1 > 10) {
        return "Nota inválida para P1";
    }
}

function validaNotap2(notaP2) {
    if (notaP2 < 0 || notaP2 > 10) {
        return "Nota inválida para P2";
    }
}

function onClick() {
    let notaP1 = obterNotaP1();
    let notaP2 = obterNotaP2();

    const mensagemP1 = validaNotap1(notaP1);
    const mensagemP2 = validaNotap2(notaP2);

    if (mensagemP1) {
        saida.textContent = mensagemP1;
    } else if (mensagemP2) {
        saida.textContent = mensagemP2;
    } else {
        let mediaCalculada = calcularMedia(notaP1, notaP2);
        saida.textContent = "Média: " + mediaCalculada.toFixed(2);
    }


    p1.value = "";
    p2.value = "";
}

btnCalcular.addEventListener("click", onClick);









//serve para fazer algo quando clicar no botao
// colocar + antes dos digitos é o operador unario, converte para numero
//saida.textContent serve +/- como um console.log mas na parte do navegador
//.value serve para pegar o numero dele
//to.fixed serve para declarar quantas casas decimais irao ter apos a virgula