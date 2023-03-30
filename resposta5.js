reverseString();

function reverseString(tabela) {
    var userName = prompt("Olá, qual é o seu nome?");
    var stringDesejada = prompt(userName+", qual palavra deseja inverter?");
    var tabela = stringDesejada.split('');
    var newString = "";
    for (var i = tabela.length - 1; i >= 0; i--) { 
        newString += tabela[i];      
    }
    console.log(newString);        
}
 