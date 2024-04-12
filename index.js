let peso = document.getElementById("KG");
let altura = document.getElementById("MG");
let btn = document.getElementById("botao");
let IMCR = document.getElementById("IMCR");
let Resultado_IMC = document.getElementById("Resultado");
let resultado;


btn.addEventListener('click',()=>{
   
   resultado = (peso.value)/(altura.value*altura.value)

    alert(resultado)

    switch (resultado) {

        case (resultado>=19):
                Resultado_IMC.innerText = "Peso Normal";
                IMCR.innerText = resultado;
               
            break;

            case (resultado>=25):
                
                    Resultado_IMC.innerText = "Sobrepeso";
                    IMCR.innerText = resultado;
                   
                break;

                case (resultado>=30 ):
                    
                        Resultado_IMC.innerText = "Obesidade grau 1";
                        IMCR.innerText = resultado;
                       
                    break;

                    case (resultado>=35):
                        
                            Resultado_IMC.innerText = "Obesidade grau 2";
                            IMCR.innerText = resultado;
                           
                        break;
                        case (resultado>=40):
                            
                                Resultado_IMC.innerText = "Obesidade grau 3";
                                IMCR.innerText = resultado;
                               
                            break;
    
        default:
           
            break;
    }
    
})