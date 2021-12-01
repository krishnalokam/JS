
myName = {
    firstName:"Siva",
    lastName:"Lokam"
}

printFullName = function(hometown,state,country){
    console.log(this.firstName + " "+this.lastName + " from "+ hometown + " which is in "+state + " of "+country)
}

// printFullName.call(myName)
// printMyName = printFullName.bind(myName)
// printMyName();

Function.prototype.mybind = function(...args) {
    let obj = this
        params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2])
    }
}

printMyName = printFullName.mybind(myName,"Andhra","BVRM");
printMyName("India")