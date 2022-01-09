let obj1 = {};
let obj2 = {};

//Strict equality matches only when their address also matches
console.log(obj1 === obj2);
console.log(obj1 === obj1);

function sum(a,b) {
    console.log(a)
    console.log(b)
}


function countLength(obj){
    if (typeof(obj)==='object' && obj = == null){
        return Object.keys(obj).length;
    }
}

// sum();
// sum(5)
// sum(5,6);
// sum(5,6,7);

console.log(countLength({a:5}));
console.log(countLength());
console.log(countLength(null));