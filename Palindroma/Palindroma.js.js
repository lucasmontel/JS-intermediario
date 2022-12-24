let palavra = gets();//Primeiro recebemos o valor

function checaPalindromo(palavra) {
    for (var i = 0; i < palavra.length / 2; i++) { //i vai percorrer até a metade da palavra 
        if (palavra[i] != palavra[palavra.length - 1]) { //Se a metade da palavra for diferente da metade da outra palavra ,Por exemplo, se a palavra tiver 6 caracteres, o código comparará o primeiro caractere com o último, o segundo caractere com o penúltimo, etc. 
            return 'FALSE'; //Retorne false
        } else {
            return 'TRUE'; //Caso contrário TRUE
        }
    }
}
print(checaPalindromo(palavra));
//Para cada iteração do loop, o código verifica se o caractere atual é diferente do caractere correspondente na outra metade da palavra. 