let arr = gets().split(''); //Vamos receber os valores e dividir


for (let i = 0; i < arr.length; i++) {//vamos percorrer o array
    if (arr[i] % 2 == 0) {            //Se todos os numeros do array divisivel por 2 forem iguais a 0 ou seja , numeros pares                
        arr = changePosition(arr, i, 0);//Falamos o que queremos mexer , i que é todos os elementos do array e 0 que seriam as primeiras posições
    }
}

print(arr);//Logo todos os numeros pares estaram na frente

function changePosition(arr, from, to) { 
    arr.splice(to, 0, arr.splice(from, 1)[0]); //Aqui ele vai remover do from (arr.splice(from, 1)[0]);) o primeiro elemento para depois adicionar em (arr.splice(to, 0,) no primeiro indice
    return arr; //Retornamos o array
}