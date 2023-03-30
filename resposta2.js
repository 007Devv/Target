var userName = prompt("Olá, qual é o seu nome?");
var userResp = prompt(userName+", qual número você deseja descobrir se pertence à sequência?");
var termo = 1;
var penultimo = 0;
var ultimo = 1;
var numero;
var count = 100;

if (termo<=2){
    while(termo <= 2){
    numero = termo -1;
    termo ++;
    if(numero == userResp){
        console.log("Seu número pertence a sequência!");
            }
        }
    }

    while(termo<=count){
        numero = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = numero;
        termo++; 
        if(numero == userResp){
            console.log("Seu número pertence a sequência!");
            break;            
            }               
        }
    if(userResp != numero){
        console.log("Seu numero não pertence a sequência!");
    }

