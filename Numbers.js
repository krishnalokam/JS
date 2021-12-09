console.log(0.1+0.2)

function findMax(array){
    let currentMax = -Infinity;
    for (element of array){
        if (element > currentMax){
            currentMax = element;
        }
    }
    return currentMax;
}

maxvalue = findMax([-10,50,40,30,60,-100])
console.log(maxvalue)

function convert_print(a){
    let result = Number(a)
    console.log(result);
}

console.log("Convert to Numbers -- undefined");
convert_print(undefined)
console.log("Convert to Numbers -- null");
convert_print(null)
console.log("Convert to Numbers -- true");
convert_print(true)
console.log("Convert to Numbers -- false");
convert_print(false)
console.log("Convert to Numbers -- 123");
convert_print(123)
console.log("Convert to Numbers -- abc");
convert_print("abc")
console.log("Convert to Numbers -- 123");
convert_print("123")
console.log("Convert to Numbers -- '' ");
convert_print("")

console.log(NaN +1);

// NaN is not equal to NaN
console.log([1,2,NaN,4,5].indexOf(NaN));