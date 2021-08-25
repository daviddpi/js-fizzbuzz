
for(var numeri = 1; numeri <= 100; numeri++){ //ciclo for che stampa su console i numeri da 1 a 100
    //se i numeri non sono multipli di 3 o 5 stampa il numero
    if( (numeri % 3 != 0) && (numeri % 5 != 0) ){
        console.log(numeri);
    }

    if( (numeri % 3 == 0) && (numeri % 5 == 0) ){ // multipli sia di 3 che di 5 e stampa fizzbuzz
        console.log("FizzBuzz" + numeri);
    }else if(numeri % 3 == 0){ //multipli da 3 quindi stampa fizz
        console.log("Fizz");
    } else if(numeri % 5 == 0){ // multipli di 5 quindi stampa buzz
        console.log("Buzz");
    }
}
    