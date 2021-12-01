//call, apply , bind

myName = {
    firstName:"Siva",
    lastName: "Lokam",    
}

secondName = {
    firstName:"Rahul",
    lastName:"Dravid"
}

let printFullName =  function(hometown,state){
    console.log(this.firstName + " "+ this.lastName + " from "+hometown + " which is in "+state);
}
printFullName.call(myName,"Mogaltur","Andhra");
printFullName.apply(secondName,["Bangalore","Karnataka"]);

let printMyName = printFullName.bind(myName,"Mogaltur","Andhra");

console.log(printMyName);
printMyName();
