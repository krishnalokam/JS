/*  Chapter 2.2  */
/********   Question -1 ***************
for (var i=0;i<3;i++){
    setTimeout(function log(){
        console.log(i);
    },0.00001)
}

/********   Question -1 ***************
let myName="Siva Lokam";

function printer(addExclamation){
    function printName(){
        let newName=myName;
        if (addExclamation){
            newName  = myName+"!";       
         }
         console.log(`oldName = ${myName}`);
         console.log(`newName = ${newName}`);         
    }
    return printName;
}

const printNameFn = printer(true);

printNameFn(myName)

myName="another Name"
printNameFn(myName)

function a(){
    // var x = 20;
    return function(){
        console.log(x);
    }
}

var x = 10;

const b = a();
b();


/********   Question -2 ***************
let count = 0;
setTimeout(function() {
    count++;
    console.log(`In setTimeout ${count}`);
},1000);

console.log(`${count}`);
for(var i=0;i<3; i++){
    setTimeout(function(){
        console.log(i);
    },1)
}

/*********  Question - 3 ******


function a(){
    // var x = 15;
    let fn;
    {
        // var x = 5;
        fn = function () {
            console.log(x);
        };
    }    
    return fn;
}

var x=10;
const b = a();
b();

/*************** Question -4 *******************

var a = 100;

function abc(x) {
    var a = 10;
    return function (y) {
        return a + y;
    }
}

a = 50;

var inner = abc(20);

function foo() {
    var a = 30;
    console.log(inner(5));
}

foo();

/*************** Question -5 *******************

(function immediateA(a){
    return (function immediateB(b){
        console.log(a);
    })(1);
})(0);

/*************** Question -6 *******************

function createIncrement() {
    let count=5;
    function increment(){
        count++;
    }
    
    let message = `Count is ${count}`;

    function log(){
        console.log(message);
        message = `Count is ${count}`;
        console.log(message);
    }

    return [increment,log]
}

const [increment,log] = createIncrement();
increment();
increment();
increment();
log();

/*************** Question -7 *******************
function createUser(initialName){
    let name = initialName;
    return {
        getName(){
            return name;
        },
        setName(newName){
            name=newName;
        }
    };
}

let p1 = createUser("Siva");
let p2 = createUser("Lokam");
console.log(p1);
p1.setName(null);
console.log(p1.getName());

/**********Chapter 2.3 ***************** */

function meomoize(fn) {

    const cache = new Map();
    
    return function(...args) {
        console.log(cache);
        key = args.toString();

        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key,fn(...args));
        return cache.get(key);                
    }
}

function fib(n) {

    if (n<2) {
        return n;
    }
    return(fib(n-1)+fib(n-2))
}

function time(fn){
    console.time();
    fn();
    console.timeEnd()
}

// time(()=> console.log(fib(40)));
// time(()=> console.log(fib(40)));
// time(()=> console.log(fib(40)));
// time(()=> console.log(fib(40)));

fibM = meomoize(fib)
time(()=> console.log(fibM(10)));
time(()=> console.log(fibM(15)));
time(()=> console.log(fibM(20)));
time(()=> console.log(fibM(25)));
time(()=> console.log(fibM(30)));
time(()=> console.log(fibM(35)));
time(()=> console.log(fibM(40)));
time(()=> console.log(fibM(45)));
// time(()=> console.log(fibM(50)));

time(()=> console.log(fibM(10)));
time(()=> console.log(fibM(15)));
time(()=> console.log(fibM(20)));
time(()=> console.log(fibM(25)));
time(()=> console.log(fibM(30)));
time(()=> console.log(fibM(35)));
time(()=> console.log(fibM(40)));
time(()=> console.log(fibM(45)));
// time(()=> console.log(fibM(50)));

