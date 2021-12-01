// let multiply = function(x,y){
//     console.log(x*y);
// }

// multiplyBy2 = multiply.bind(this,2);
// multiplyBy3 = multiply.bind(this,3)
// multiplyBy2(3);
// multiplyBy3(4)

let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

multiplyBy2 = multiply(2);
multiplyBy3 = multiply(3);
multiplyBy2(3);
multiplyBy3(4)