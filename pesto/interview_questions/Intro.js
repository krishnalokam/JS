function sum(a,b){
    return     a+b;
}

function sum2(a,b){
    return {
        sum: a+b
    };
}

console.log(sum(4,5));
console.log(sum2(4,5));