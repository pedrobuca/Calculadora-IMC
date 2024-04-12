let peso = document.getElementById("KG");
let altura = document.getElementById("MG");
let btn = document.getElementById("botao");
let IMCR = document.getElementById("IMCR");
let Resultado_IMC = document.getElementById("Resultado");
let resultado;


btn.addEventListener('click',()=>{
   
   resultado = (peso.value)/(altura.value*altura.value)


    if(resultado<19){
        Resultado_IMC.innerText = "Peso Insuficiente";
        IMCR.innerText = resultado;
    }

    if(resultado>=18.5 && resultado<=24.9){
        Resultado_IMC.innerText = "Peso Normal";
        IMCR.innerText = resultado;
    }
    else if(resultado>=25 && resultado<=29.9){
        Resultado_IMC.innerText = "Sobrepeso";
        IMCR.innerText = resultado;
    }
    else if(resultado>=30 && resultado<=34.9){
        Resultado_IMC.innerText = "Obesidade grau 1";
        IMCR.innerText = resultado;
    }
    
    else if(resultado>=35 && resultado<=39.9){
        Resultado_IMC.innerText = "Obesidade grau 2";
        IMCR.innerText = resultado;
    }
    else if(resultado>=40){
        Resultado_IMC.innerText = "Obesidade grau 3";
        IMCR.innerText = resultado;
    }

    peso.value = "";
    altura.value = "";
})



