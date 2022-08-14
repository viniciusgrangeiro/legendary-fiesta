function soma(){
    return 2+2;
}

// console.log(soma());

//                      definindo um padrao para
//                      os argumentos caso nao 
//                      receba nenhum parametro
function somaDoisNumeros(num1 =1, num2 = 1){
    return num1 + num2;
}

console.log(somaDoisNumeros(4,6));


function multiplica(num1, num2){
    return num1 * num2;
}
console.log(
    multiplica(
        somaDoisNumeros(1,2),somaDoisNumeros(1,1)
    )
);