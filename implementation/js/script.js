function calcularIMC() {
    var pesoInput = document.querySelector("#peso");
    var alturaInput = document.querySelector("#altura"); 
    var resultado = document.querySelector("#resposta");
    var classificacaoOutput = document.querySelector("#classificacao");
    
    
    var pesoValue = pesoInput.valueAsNumber;
    var alturaValue = alturaInput.valueAsNumber; 

    if(pesoValue > 0 && alturaValue > 0) {
        var IMC = pesoValue / (alturaValue * alturaValue)
        resultado.textContent = IMC.toFixed(2);   
        var classificacao =  classificarPeloIMC(IMC)
        classificacaoOutput.textContent = classificacao
            
    } else if (pesoValue <= 0) {
        alert("Valor de peso precisa ser um valor positivo, tente outra vez!");
    } else if (alturaValue <= 0) {
        alert("Valor de altura precisa ser um valor positivo, tente outra vez!");
    }

}

function classificarPeloIMC(IMC) {
    var classificacao = "";
    if(IMC < 19)
    {
        classificacao = "Abaixo do peso"
    }else if(IMC >= 19 && IMC < 25)
    {
        classificacao = "Peso normal"
    }else if(IMC >= 25 && IMC < 30)
    {
        classificacao = "Sobrepeso"
    }else if(IMC >= 30 && IMC < 40)
    {
        classificacao = "Obesidade tipo 1"
    }else{
        classificacao = "Obesidade morbida"
    }
    return classificacao;
}