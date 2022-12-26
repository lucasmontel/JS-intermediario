var string = gets().split('');//Dividimos os caracteres 

switch (string[0]) { /*Fazemos uma função que recebe o primeiro caracter */
    case '(':        /*Esse é o primeiro caracter, ele quem é o "string[0]" */
        if (string[1] == ')') { /*Então caso o primeiro caracter seja igual a "x" faça tal coisa*/
            print('true');
        } else {
            print('false');
        }
        break;

    case '[':
        if (string[1] == ']') {
            print('true');
        } else {
            print('false');
        }
        break;

    case '{':
        if (string[1] == '}') {
            print('true');
        } else {
            print('false');
        }
        break;

    default:
        print('false');
        break;
}

/*string[0] é o case, no caso o primeiro indice*/
/*No switch o que você colocar dentro dos parenteses pode fazer referencia com o "case" ,ex: "switch(string[0]){case ')'" então o string[0] passa a ser o case }  */

/*Linha três ao nove: Caso o  case que é o string[0] como dado no parenteses do switch for ')' e indice 1(segundo caracter) sejam igual(==) a "x" , faça tal coisa     */