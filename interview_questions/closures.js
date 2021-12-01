const myName = "Siva Lokam"

function printName(){
    console.log(myName);
}

printName()

function outerFunction(OuterVariable){
    return function(innerVariable){
        console.log("Outer Variable :"+OuterVariable);
        console.log("Inner Variable :"+innerVariable)
    }
}

const myFunction = outerFunction("outer");
myFunction("Inner")