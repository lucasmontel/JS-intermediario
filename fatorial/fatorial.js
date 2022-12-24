// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 


let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

if (n <= 2) { 

 print(n); 

} 

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".
let nZero = n; //O valor que nosso usuário inserir
let soma = 0; //0
const varia = -1;
                                    

while (n >= 4 ) {//Enquanto n for mair ou igual a 4 verifique se:
if (n == nZero) {
    soma += parseInt(n*((n-1) / (n-2)));//Some 0 com n X o resultado de n-1 o resultado dividimos pelo resultado de n-2
    
    soma += (n-3);/*Depois subtraia - 3 */
    n = n - 4;  /*Falamos aqui que n é igual a n e subtraimos 4*/
    } else { /*Caso contrário faça:*/
    soma += varia * parseInt(n*((n-1) / (n-2))) /*A conta do N e multiplique por menos um*/
    soma += (n-3);/*Subtraimos três*/
    n = n - 4; /*-4*/
}}

if (n == 3) { 
    soma += varia * parseInt(n*((n-1) / (n-2)));
} else if (n == 2) {
    soma += varia * (n * (n-1));
} else if (n == 1) {
    soma += varia * n
}

print(soma);