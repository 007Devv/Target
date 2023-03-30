// variaveis de faturamento e dias em que o faturamento foi acima da média
var menorFaturamento;
var maiorFaturamento;
var maiorQueMedia = 0;


// tabela com todos os dias de faturamento da empresa
var mes = ['22174.1664', '24537.6698', '26139.6134', '0.0', '0.0', '26742.6612', '0.0', '42889.2258', '46251.174', '11191.4722',
'0.0', '0.0', '3847.4823', '373.7838', '2659.7563', '48924.2448', '18419.2614', '0.0', '0.0', '35240.1826', '43829.1667', '18235.6852',
'4355.0662', '13327.1025', '0.0', '0.0', '25681.8318', '1718.1221', '13220.495', '8414.61'];

fazContas();
verificaMenorFaturamento();
verificaMaiorFaturamento();


// criar uma media mensal
// criar um contador que sirva como identificador dos dias na tabela para endereçar os dias em que foi acima da media e para desconsiderar o calculo dos dias com 0 de faturamento
// converter o valor da tabela para numeros e calcular a média
// desconsiderar dias com faturamento 0
function fazContas(){

    var contadorIndice = 0;
    var resultAnterior = 0;
    var contadorDiasSemFaturamento = 0;
    var resultado = 0;

while(contadorIndice < mes.length+1){
    var percorre = mes[contadorIndice];
    var resultado = parseFloat(percorre).toFixed(2);
    contadorIndice++;
    if(resultado > 0){
    var resultAnterior = parseFloat(resultAnterior) + parseFloat(resultado);
    }
    else{
        contadorDiasSemFaturamento++;
    }   
}
contadorIndice = contadorIndice - contadorDiasSemFaturamento;
var mediaMensal = parseFloat(resultAnterior).toFixed(2) / parseFloat(contadorIndice).toFixed(2);
console.log("A média mensal foi de: R$"+parseFloat(mediaMensal).toFixed(2));
console.log("A quantidade de dias em que o faturamento foi zero é de: "+contadorDiasSemFaturamento);

var contadorIndice = 0;
    var resultAnterior = 0;
    var resultado = 0;

    while(contadorIndice < mes.length+1){
        var percorre = mes[contadorIndice];
        var resultado = parseFloat(percorre).toFixed(2);
        contadorIndice++;
        if(resultado > mediaMensal){
            maiorQueMedia++;
        }
    }
    console.log("A quantidade de vezes em que o faturamento foi acima da média foi de: "+maiorQueMedia);
}


function verificaMenorFaturamento(){
    
    var contadorIndice = 0;
    var resultado = 0;
    var resultAnterior = parseFloat(mes[contadorIndice]).toFixed(2);
    
    while(contadorIndice < mes.length+1){
        var percorre = mes[contadorIndice];
        var resultado = parseFloat(percorre).toFixed(2);
        contadorIndice++;
        if(resultado > 0 && resultado <= parseFloat(resultAnterior)){
           resultAnterior = resultado;            
        }
        else{
            resultAnterior = resultAnterior;
        }
    }
    menorFaturamento = resultAnterior;
    console.log("O menor faturamento do mês com excessão dos dias em que não houve faturamento, é de: R$"+menorFaturamento);
}

function verificaMaiorFaturamento(){
    
    var contadorIndice = 0;
    var resultado = 0;
    var resultAnterior = parseFloat(mes[contadorIndice]).toFixed(2);
    
    while(contadorIndice < mes.length+1){
        var percorre = mes[contadorIndice];
        var resultado = parseFloat(percorre).toFixed(2);
        contadorIndice++;
        if(resultado > 0 && resultado >= parseFloat(resultAnterior)){
           resultAnterior = resultado;            
        }
        else{
            resultAnterior = resultAnterior;
        }
    }
    maiorFaturamento = resultAnterior;
    console.log("O maior faturamento do mês foi de: R$"+maiorFaturamento);
}
