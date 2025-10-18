/* const name = 1;

const UNAME = "ganesh.murugan@cognizant.com";
const PWD = "Ganmks@123";

const WHITE_COLOR = "#fff";
const BLACK_COLOR = "#000";
console.log(WHITE_COLOR);
console.log(BLACK_COLOR);
console.log("User: " + UNAME + "\n" + "Password: " + PWD);
 */

/* const BIRTH_YEAR = 1997;
const AGE = 27;

console.log("Year I was Born: " + BIRTH_YEAR + "\n" + "Age: " + AGE); */

/* login(UNAME, PWD);

let whiteColour;

const DATE_OF_BIRTH = '27.10.1997';
const age = calAge(DATE_OF_BIRTH); */

// 8 data type
/* number data type
*/
/* let pi = 3.14;
let prime = 29;

console.log(pi, prime);

console.log(typeof pi); */

// special numeric values

/* let infi = Infinity;
let negInfi = -Infinity;
let temp = NaN; // NAN - Not a Number    

temp = NaN + 2;

temp = NaN ** 0;

console.log(infi);
console.log(negInfi);

console.log(typeof infi);
console.log(typeof nan);

console.log(temp);
console.log(1/0); */


/* let sum = 543 +235;

console.log(typeof sum);
 */

// BigInt

// 2^53-1 = 9007199254740991
/* 
let limit = 9007199254740991;

console.log(limit + 1); // Correct
console.log(limit +2); // Wrong
console.log(limit +3); // correct */
// Even number is correct;
// correct way to add big int is to put n in the last letter and one more thing is add bigint to bigint only. eg:
/* limit = 9007199254740991n;
console.log(limit + 1n);
console.log(limit + 2n);
console.log(limit + 3n);

console.log(typeof(limit));
 */
/* 
let periyaNumber = 12345678910n;

console.log(periyaNumber + 2024n); */

// String Data Type

/* let intro = "Hi This is Ganesh 1+23";

let channel = "This is Ganesh's Channel";

let quote = 'He said "I am BatMan"';

let paragraph = `This is Ganesh's , "I am BatMan"`;

let embed = `1+2 = ${intro}`;

console.log(embed);
console.log(paragraph);
console.log(quote);
console.log(intro);
console.log(typeof intro); */

/* let name = "Ganesh";

console.log(`My Name Is ${name}`); */

/* // Boolean

let mis = true;

console.log(mis);

// null

let age = null;

console.log(age);

// undefined

let DOB;

console.log(DOB); */

/* let myName = "Ganesh";
myName = "Blacksmithgamer.com";

console.log(typeof myName);

myName = 896;

console.log(typeof myName); */

/* let myName = "Ganesh";

console.log(typeof myName);

myName = 1997;

console.log(typeof myName); */


/* let input = prompt("What is your name:");

let first = input.slice(0,1);
let last = input.slice(1,input.length);
let result = first.toUpperCase() + last.toLowerCase();
let outcome = confirm(`Is your Name ${result}`);

console.log(outcome); */

/* let age = 27;
console.log(age);
age = String(age);

console.log(age);

let isAdult = null;

isAdult = String(isAdult);
console.log(typeof isAdult); */
// console.log('12'%'7');
/* 
let age = "undefined";

age = Number(age);
console.log(typeof age);

console.log(age); */

/* let x = 0;

x = Boolean(x);
console.log(typeof x);
console.log(x); */

// 7 + 11 = 18
// + is an operator
// 7,11 are operands

/* // unary
let x = 1;
x = -x; // -x * 1;
console.log(x);

// binary +, -, *, /, %, **

// ** is a exponent operator
// % is an modulo operator
let a = 12,b = 6;

let sum = a ** b; // 12^6

console.log(sum); */

/* let a = '12';
let b = '6';

let sum = +a % +b; // unary plus
let power = (+a) ** +b; // for exponent operator we need to put Parenthesis in first operands.
console.log(sum); */

// assignment operator
/* let a = b = c = 12;

console.log(a,b,c); */

// Modify in place
/*let x = 12;
x += 5;
console.log(x); */

// Increment / Decrement
/* let x = 12;
x--;
console.log(x--); //post increment / decrement
console.log(x); */

/* let a = 12;
let b = 13;
let c = ++a + b--; // a is pre increment and b is post decrement
console.log(c); */

/* // < - comparition operator
let a = 10;
let b = 12;
let result = a<=b;

console.log(typeof result); // comparition operator will always return boolean

// is a = b ?
a = 12;
b = 12;
result = a == b;

console.log(result);

// is a != b;

a = 'Ganesh'; // -> G is the first character (7 place)
b = 'blacksmithgamer.com'; // -> b is the first character (3 place)
result = a > b;
console.log(result);   */

/* let a = '0';
a = Boolean(a);

let b = 0;
b = Boolean(b);

console.log(a == b);

console.log('0' == 0); */

// nll and undefiend

/* console.log(undefined > 0);
console.log(undefined <= 0);
console.log(undefined < 0);
console.log(undefined == 0); // formula set by javascript owner
console.log(Number(null)); */
// console.log(null == undefined);
/* 
console.log('goms' > 'Zoms'); */
// Conditional statement
/* let isAdult;

let age = 21;

if (true) { // always run
    isAdult = true;
}

console.log(isAdult);
 */

/* let person;

let age = 10;

if (age > 18) {
    person = 'adult';
}else if (age > 12) {
    person = 'Teenager';
}else {
    person = 'child';
}

console.log(person); */

/* // conditional operator
let person;
let age = 13;
person = (age > 18)? 'Adult' : (age > 12)? 'Teenager' : 'child'; // equalant to  if statement also called as conditional operator


console.log(person);
 */

/* if ('0') {
    console.log('Hi');
} */

/* let x = 1;
let result;

if (x > 0) {
    result = 'Positive Number';
}else if (x < 0) {
    result = 'Negative Number';
} else {
    result = 'x is equal to  0';
}

console.log(result); */

/* let name = prompt("Enter the Name here:");

let reverseName = name.split('').reverse().join('');

if (name == reverseName) {
    console.log('Palindrom');
}else {
    console.log('Not a Palindrom');
} */
/* 
let year = 1900;

// divisible by 4;
// divisible by 100;
// divisible by 400;

if (year % 4) {
    if (year % 100) {
        if (year % 400) {
            console.log(`${year} is a leap year`);
        }else {
            console.log(`${year} is not a leap year`);
        }
    }else {
        console.log(`${year} is leap year`);
    }
}else {
    console.log(`${year} is no a leap year`);
} */

/* let number = 128;

if (number % 2 == 0) {
    console.log(`${number} is a even number`);
}else {
    console.log(`${number} is a odd number`);
} */

// Logical Operators in JS
// - OR, - AND, - NOT , - NULL Coalescing

// Truuth Table for OR
//  A        B       O
// ---------------------
//  1        1       1
//  1        0       1
//  0        1       1
//  0        0       0

// Truuth Table for AND
//  A        B       O
// ---------------------
//  1        1       1
//  1        0       0
//  0        1       0
//  0        0       0

// NOT
// 1 0
// 0 1

// console.log(0 || 1 || 12 || 3 || 10 || 9 || 15);

// console.log(1 && 13 && 1 && 12);

/* let age = 21;
let gender = 'F';

if (age>=21 || (age>=18 && gender == 'F')) {
    console.log('Eligible');
}else {
    console.log('Not Eligible');
} */

// ?? - Null Colosin operator
/* let age;
let current_age = age ?? 19;

console.log(current_age); */

// console.log(null || 0 || undefined);

// while, do-while, for
// -- Initialization, Validation, Updation
// printing from 1-10
// While is a entry controlled loop
// do-while is a exit controlled loop
/* let num = 1;
while(num<=10) {
    console.log(num);
    num++
} */

/* let num = 1;
do {
    console.log(num);
    num++;
}while (num <= 10); */

/* for (let num = 1; num<= 10; num++) {
    console.log(num);
} */

// factorial
/* let n = 5;

let ans = 1;

for (let i = 1; i<=n;i++) {
    ans *= i;
}
console.log(ans); */

// while factorial
/* let n = 5;
let ans = 1;
let i = 1;
while (i<=n) {
    ans*=i;
    i++;
}
console.log(ans); */

// sum of N nubers

/* let n = 10;

let ans = 0;

for (let i = 1; i<=n; i++) {
    ans+=i;
}
console.log(ans); */

// Jump Statements - continue, break

/* let n = 10;
let ans = 0;

for (let i = 1; i<=n;i++) {
    if(i%2!=0) {
        continue;
    }
    ans+=i;
}
console.log(ans); */

// Switch Statement
/* 
let n = 5;

switch(n) {
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    case 4:
        console.log('four');
        break;
    case 5:
        console.log('five');
        break;
    case 6:
        console.log('six');
        break;
    case 7:
        console.log('seven');
        break;
    case 8:
        console.log('eight');
        break;
    case 9:
        console.log('nine');
        break;
    case 10:
        console.log('ten');
        break;
    default:
        console.log('number greater than 3');
} */
/* let op = '='
let a = 1, b=56;

switch(op) {
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '/':
        console.log(a/b);
        break;
    case '*':
        console.log(a*b);
        break;
    case '%':
        console.log(a%b);
        break;
    default:
        console.log('Invalid Operator');
} */

/* let a = 12, b = 24;
let c;
// var1 and var2 is a parameters
function operation(var1,var2) {
    var2 = 3;
    c = (var1+var2*var2/var1)*var2;
    return c;
}
// operation(a,b);
console.log(operation(2));
// operation(1023,8); */
/* let a = 5;
function oddOrEven(num) {
    if (num%2 == 0) {
        return 'Even';
    }else {
        return 'Odd';
    }
}

let oddEven = oddOrEven;

console.log(oddEven(2)); */
/* 
let a = 11;

let oddOrEven = function (a) {
    if(a%2==0) {
        return 'Even';
    }
    console.log('here');
    return 'Odd';
}

console.log(oddOrEven); */

/* let a = 5;

let oddOrEven = (a) => a%2==0? "Even": "Odd";

console.log(oddOrEven(4)); */

// call back function
/* function operation(op, a, b) {
    return op(a,b);
}

let add = (a,b) => a+b;

function sub(a,b) {
    return a-b;
}

let divi = (a,b) => a/b;
let multi = (a,b) => a*b;

console.log(operation(multi, 2, 3)); */
// example
/* let sum = (a) => a*5;

console.log(sum(2));
 */
// --------------------------------Advance-----------------------------------
// Object
// syntax
/* let car = {
    key : value,
    key : value
} */

/* let enginOption = 'petrol, diesel';

let car = {
    name : 'Nexon',
    brand : 'Tata',
    driveTrain : enginOption+',ev',
    backSeat : null,
    'Kilo Meter' : '10,000KM',
    price : 15,
    onRoadPrice(price) {
        return this.price+2;
    }
}; // key and value phares

console.log(car.onRoadPrice(11));

delete car["Kilo Meter"];
car['ModelYear'] = 2024;
car.ModeOfTrans = 'Road';

console.log(car.onRoadPrice(11));

// (this) is take the current object value

let obj = {
    goal: 4,
    goalSetting(goal) {
        return goal+1;
    }
}; 

console.log(obj.goalSetting(1)); */

/* let user = {
    name : 'Ganesh',
    age : 23
};

console.log(user.name);
user['name'] = 'M.Ganesh';
console.log(user.name);
delete user.name;
console.log(user.name); */

// in operator - check that object is present
/* let user = {
    name : 'ganesh',
    age : 23,
    height: 5.7
};

console.log('age' in user);

for (key in user) {
    console.log(key + ' : ' + user[key]);
} */

// value vs reference
/* let a = {
    name : 'ganesh',
    age : 27,
}
let b = a;

console.log(a,b);

b.age = 96; // get  a reference from a and b address (reference copy)
console.log(a,b); */

/* const a = {
    name : 'ganesh',
    age : 23
};
let b = a;
console.log(a,b);
a.age = 97;
console.log(a,b); */
/* let a = {
    name : 'ganesh',
    age : 27
}; // Garbage collection deleted the key value

console.log(a);
a = null; //Garbage collection

console.log(a); */

/* let a = {
    name : 'ganesh',
    age : 27
};

b = a;
console.log(a);

a = {};

console.log(b); //Reference only change not the parant*/

// Constructor is also a function

/* let a = {
    name : 'ganesh',
}

function User(a) { // function name should start with a capital letter for Constructor
    this.name = a; // this dot property name equalto value
}

let ganesh = new User('Murugan'); // while calling constructor we need to define new key word in front
let siva = new User('siva');
console.log(ganesh, siva); */

/* let a = {
    name: 'user-name',
    age: '27'
};

function Name(user, age) {
    // this = {};
    this.name = user;
    this.salary = 50000;
    // return this
    this.age = age;
}

let ganesh = new Name('ganesh', '27');
let murugan = new Name('murugan', '42');
let siva = new Name; // even we can ignore parantheses if we don't declare argument but the best practice is put parantheses always


console.log(ganesh, murugan); */

// asigning function into the object

/* let a = {
    name: 'ganesh',
};

function User () {
    this.name = 'blacksmithgamer.com';
    this.age = function () {
        return 23;
    }
    }

let ganesh = new User();

console.log(ganesh.age()); */

/*  function Add() {
    this.a = 5;
    this.b = 10;
    this.add = function(c) {
        return this.a + this.b + c;
    }

}

let sum = new Add();

console.log(sum.add(5)); */



// Array is a list of values
/* let veges = new Array();
veges = ['carrot', 'beetroot'];
console.log(veges); */

/* let veges = ['carrot', 'beetroot','raddish', true, null, undefined, 23, {name:'Ganesh', age: 27}, function add(a,b) {return a+b}];

console.log(veges);

console.log(veges[7]); //indexing it will always start with 0

console.log(veges[8](1,3)); */

/* let veges = ['carrot', 'beetroot','pumkin'];

veges[3] = 'beans';
veges.push('avacado'); //add in last
veges.unshift('raddish');//add in first
console.log(veges);
console.log(veges.pop());//remove last one
console.log(veges.shift());//remove first one
console.log(veges); */

/* let veges = ['carrot', 'beetroot', 'pumkin'];

for (vege of veges) { // this is like in operator
    console.log(vege);
} */

/* // Syntex of in
for(variable in object) {
    // code here
} */

/* // Syntex of (of)
for (variable of iterable) {
    // code here
} */

/* let veges = ['carrot', 'beetroot', 'pumkin'];

for (go in veges) {
    console.log(go);
}

const users = {
    'id' : 1,
    'name' : 'Ganesh',
    'age' : 27
}

for (user in users) {
    console.log(users[user]);
}

function UserNew() {
    this.id = 2,
    this.name = 'Murugan',
    this.age = 42
}

let use = new UserNew();

console.log(use); */

/* let veges = new Array('carrot', 'beetroot', 'pumkin'); // single dimention array

console.log(veges.length); */

// Two Dimention Array
/* let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(mat[1][2]); */

/* let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i=0;i<mat.length;i++) {
    for (let j =0;j<mat[i].length;j++) {
        console.log(mat[i][j]);
    }
}  */

/*let a = 0;
let matrix = [
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine']
];

if(a === 0) {
    console.log(matrix[a].length);
} */

// Map and set
// Map
/* let map = new Map();
map.set(1,'Blacksmithgamer');
map.set(2,'ganesh')
    .set(3, 'undefined');
for(key of map.values()) {
    console.log(key);
}

console.log(map.size);// to get a length of the map property
console.log(map.get(2))// to get a value from an element
console.log(map);
map.delete(2); //delete an element
console.log(map);
map.clear(); //clear
console.log(map);
 */

// set
/* let set = new Set();
set.add('Ganesh');
set.add('Blacksmithgamer')
   .add('Ganesh')//it won't add duplicate values
   .add(1);
for(s of set) {
    console.log(s);
}
console.log(set);
set.delete(1);
console.log(set.has(1));
console.log(set.size);
console.log(set);
set.clear();
console.log(set); */

/* let mobNumber = new Set();

mobNumber.add(9)
         .add(8)
         .add(4)
         .add(0)
         .add(9)
         .add(8)
         .add(3)
         .add(2)
         .add(3)
         .add(9);
console.log(mobNumber.size);//Size is a property */

// JSON - Javascript Object Notation

/* let user = '{"name": "Ganesh", "age": 23}';

console.log(typeof JSON.stringify(user)); //change json into string
console.log(typeof JSON.parse(user)); // change json into object */

// Date and Time

/* let bday = new Date('1997-10-27');

console.log(bday.getMonth()); */

// Recursive functions is calls it's function again and again
// - base case
// - update statement
// - recursive call

// 5 => 5X4X3X2X1 = 120
/* function factorial(n) {
    if(n==1) { //base case is in which situation do i need to stop this recursive
        return 1;
    }    
    return n*factorial(n-1);//recursive call and (n-1)is update statement when it will going to update each time
}

console.log(factorial(5));
// 5 => 5+4+3+2+1 = 15;
function add(n) {
    if(n==1) {
        return 1;
    }
    return n+add(n-1);
}

console.log(add(5)); */

// Class
// object
/* let Obj = {
    name: 'Ganesh',
    age : 27,
    display : function() {
        console.log('Hello World',this.name);
        console.log('Age:', this.age);
    }
}; */
/* 
class User { // always user upper case
    #name;//private property
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    display() {
        console.log('Name:', this.#name);
        console.log('Age:', this.#age);
    }
    get name() { // to access private property getter method
        return "Name: "+this.#name;
    }
    set name(name) {//setter to  set the private poperty
        if(name=='blacksmithgamer') {
            this.#name = 'code';
        }else {
            this.#name = name;
        }
    }
    get age() {
        return "Age: "+this.#age;
    }
    set age(age) {
        this.#age = age;
    }
};

let app = new User('Ganesh', 27);
app.name = 'blacksmithgamer';
app.age = 100;
app.display(); */

// Inheritance and Overriding
// Inheritance

/* class Animal {
    legs;
    tail;

    constructor(legs,tail) {
        this.legs = legs;
        this.tail = tail;
    }

    display() {
        console.log('Animal Constructor')
        console.log(this.legs);
        console.log(this.tail);
    }
}

class Human extends Animal {
    nationality;
    constructor(legs, tail, nationality) {
        super(legs,tail);//its a super call for Animal this is to call super class constructor
        this.legs = legs;
        this.tail = tail;
        this.nationality = nationality;
    }
    
}

// let anime = new Animal(2, false);
// anime.display();

let ganesh = new Human(4,false,'indian');
ganesh.display(); */

// Overriding
/* class Animal {
    legs;
    tail;

    constructor(legs,tail) {
        this.legs = legs;
        this.tail = tail;
    }

    display() {
        console.log('Animal Constructor')
        console.log(this.legs);
        console.log(this.tail);
    }
}

class Human extends Animal {
    nationality;
    constructor(legs, tail, nationality) {
        super(legs,tail);//its a super call for Animal this is to call super class constructor
        this.legs = legs;
        this.tail = tail;
        this.nationality = nationality;
    }
    display() {
        console.log('Human display');
        console.log(this.legs);
        console.log(this.tail);
        console.log(this.nationality);
    } // overriding
    
}

// let anime = new Animal(2, false);
// anime.display();

let ganesh = new Human(2,false,'indian');
ganesh.display(); */

// Error Handling
/* let a = new Map();

try {
    console.log(a[9]);
}
catch(err) {
    console.log(err);
} */

// Promise and Async
// Promise
/* isHalwaThere = true;
function waitInQueue() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if(isHalwaThere) {
                resolve('Buy 1/2 Kg Halwa');
            }else {
                reject('Halwa Finished');
            }
        }, 1000);
    });
}

function buyHalwa() {
    waitInQueue().then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    }) 
    .finally(()=>{ //what ever the outcome finally will run
        console.log('Go Home');
    })
}

buyHalwa();
console.log('Halwa wala'); */

// Async
/* isHalwaThere = false;
function waitInQueue() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if(isHalwaThere) {
                resolve('Buy 1/2 Kg Halwa');
            }else {
                reject('Halwa Finished');
            }
        }, 1000);
    });
}

async function buyHalwa() { //async function await need to give for the call back fnction
    try {
        let result = await waitInQueue();
        console.log(result);
    }
    catch(err) {
        console.log('Halwa Finished');
    }
    
}

buyHalwa(); */

// DOM - Document Object Model
/* 
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for (let i = 0; i<arr.length; i++) {
    for (let j = 0; j<arr[i].length; j++) {
        console.log(arr[i][j]);
    }
} */


/* var map = function(arr, fn) {
    for(let i=0;i<arr.length;i++) {
        arr[i] = fn(arr[i],i);
    }
    return arr;
};

let fn = function plusone(n,i) {
    return n + i;
}


console.log(map([1, 2, 3], fn));  */

/* var filter = function(arr, fn) {
    let filteredArr = [];
    for(let i=0;i<arr.length;i++) {
        if(fn(arr[i],i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

let fn = function plusOne(n) {
    return n + 1;
}
let arr = [-2,-1,0,1,2];
console.log(filter(arr, fn)); */

/* var reduce = function(nums, fn, init) {
    let val = init;
    for(let i = 0; i<nums.length;i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

let fn = function sum(accum, curr) {
    return accum + curr;
}

let nums = [1,2,3,4];
let init = 0;

console.log(reduce(nums,fn,init)); */

/* function prymid(init) {
    let arr = [];
    for(let i=0;i<init;i++) {
        arr.push(' ');
        for(let j=0;j<init - i - 1;j++) {
            arr.push(' ');
        }
        for(let j = 0; j<i+1;j++) {
            arr.push('*');
        }
    }
    return arr;
}

console.log(prymid(5)); */
/* const height = 5;
for (let i = 0; i < height; i++) {
    let line = '';
    // Append spaces to the line
    for (let j = 0; j < height - i - 1; j++) {
        line += ' ';
    }
    // Append hashes to the line
    for (let j = 0; j < i + 1; j++) {
        line += '#';
    }
    // Print the constructed line
    console.log(line);
} */

/* function pyramid(height) {
    for(let i = 0; i< height; i++) {
        let line = " ";
        for(let j = 0; j<height-i-1; j++) {
            line += " ";
        }
        for(let j=0;j<i+1;j++) {
            line +="*";
        }
        console.log(line);
    }
}

pyramid(5); */
/* 
Beginner Exercise: Part 1
-------------------------- */

/* Exercise 1:
-----------
Write a JavaScript program to check two numbers and return true 
if one of the number is 100 or 
if the sum of the two numbers is 100.? */

/* function checkXy(x,y) {
    if(x==100 || y==100 || (x+y)==100) {
        return true;
    }else {
        return false;
    }
}

console.log(checkXy(100,51)); */

/* let check = (x,y)=>{
    if(x===100 || y===100 || (x+y)==100) {
        return true;
    }else {
        return false;
    }
}

console.log(check(20,80)); */

/* let isEqualTo100 = (x,y)=> x===100 || y===100 || (x+y)===100; 

console.log(isEqualTo100(40,100));
console.log(isEqualTo100(100,10));
console.log(isEqualTo100(10,50));
console.log(isEqualTo100(40,10));
console.log(isEqualTo100(40,60));
console.log(isEqualTo100(70,30)); */

/* Exercise 2:
-----------
Write a JavaScript program to get the 
extension of a filename. */

/* function getFilenameExtention(file1, file2) {
    let fileNameEx1 = file1.split('.').pop();
    let fileNameEx2 = file2.split('.').pop();
    return 'file one extention: ' + fileNameEx1 +' file two extection: ' + fileNameEx2;
}

console.log(getFilenameExtention('ganesh.html','helloWorld.exe')); */


/* function stringSeperator(fileName, seperator) {
    let extention = fileName.split(seperator).pop('.');
    return extention;
}

console.log(stringSeperator('webpack.config.js','.')); */

/* const getFilenameExtention = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFilenameExtention('index.html'));
console.log(getFilenameExtention('webpack.config.js')); */

/* let getfileName = (str)=>{
    let string = str.slice(str.lastIndexOf('.'));
    return string;
}
console.log(getfileName('index.html')); */

/* Exercise 3:
-----------
Write a JavaScript program to replace every
character in a given string with the character following it in 
the alphabet */

//String.fromCharCode
// charCodeAt

/* const moveCharsForward = (str)=> str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
console.log(moveCharsForward('ganesh')); */

/* function string(number) {
    let result = number.split('').map((x)=> String.fromCharCode((x).charCodeAt(0) + 1)).join('');
    return result;
}

console.log(string('12345')); */

/* Exercise 4:
-----------
Write a JavaScript program to get the current
date.
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

/* let currDate = new Date(Date.now());
let currTime = new Date(Date.now());
console.log(currTime.getHours()+ ':' + currTime.getMinutes());
console.log((currDate.getMonth()+1) + '-' + currDate.getDate() + '-' + currDate.getFullYear());
console.log((currDate.getMonth()+1) + '/' + currDate.getDate() + '/' + currDate.getFullYear());
console.log(currDate.getDate() + '-' + (currDate.getMonth()+1) + '-' + currDate.getFullYear());
console.log(currDate.getDate() + '/' + (currDate.getMonth()+1) + '/' + currDate.getFullYear()); */

/* const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth()+1;
    const years = date.getFullYear();
    return `${days}-${months}-${years}`;
}

console.log(formatDate()); */

/* Exercise 5:
-----------
Write a JavaScript program to create a new
string adding "New!" in front of a given string.
If the given string begins with "New!" already 
then retrn the original string. */

/* const addNew = (str) => str.indexOf('New!')===0? str : `New! ${str}`;

console.log(addNew('offers')); */

/* const addStr = (str)=> {
    if(str.indexOf('New!')===0) {
        return str;
    }else {
        return `New! ${str}`;
    }
}

console.log(addStr('New! Ganesh')); */

/* JavaScript Practice Exercises for Beginners
===========================================
Beginner Exercises: Part 2
--------------------------- */

/* Exercise 1:
-----------
Write a JavaScript program to create a new String
from a given string taking the first 3 characters
and the last 3 characters of a string and adding
them together.  The string length must be 3 or more,
if not, the original string is returned. */

/* const addStr = (str)=> str.length<3? str : str.slice(0,3) + str.slice(str.length-3,str.length);

console.log(addStr('Murugan ganesh')); */

/* Exercise 2:
-----------
Write a JavaScript program to extract the first half of a
string of even length. */

/* const evenStr = (str) => {
    let evenLength = Math.floor(str.length / 2);
    let firstHalf = str.slice(0,evenLength);
    return firstHalf;
}

console.log(evenStr('temples')); */

/* const firstHalf = (str) => str.slice(0,str.length /2);

console.log(firstHalf('temp'));
console.log(firstHalf('temple'));
console.log(firstHalf('temples')); */

/* Exercise 3:
-----------
Write a JavaScript program to concatenate two strings 
except their first character. */

/* const concatStr = (str1,str2) => str1.slice(1,str1.length) + str2.slice(1,str2.length);

console.log(concatStr('Murugan', 'Ganesh')); */

/* Exercise 4:
-----------
Given two values, write a JavaScript program to find out
which one is nearest to 100 */
/* const nearest100 = (num1,num2) => {
    if(num1 == 100) {
        return 'num1 is equal to 100';
    }else if(num2 == 100) {
        return 'num2 is equal to 100';
    }
    num1 = 100-num1;
    num2 = 100-num2;
    if(num1 > num2) {
        return 'num2 is nearest to 100';
    }else {
        return 'num1 is nearest to 100';
    }
    
}

console.log(nearest100(99,1));
console.log(nearest100(49,51));
console.log(nearest100(50,50)); */



/* const closeTo100 = (a,b)=> (100-a) < (100-b) ? a : b;

console.log(closeTo100(99,1));
console.log(closeTo100(49,51));
console.log(closeTo100(50,50)); */

/* Exercise 5:
-----------
Write a JavaScript program to check a given string contains 
2 to 4 occurences of a specified Character. */

/* const countChars = (str,char) => 
    str.split('').filter(ch => ch === char).length;

const contains2To4 = (str,char) => 
    countChars(str, char) >=2 && countChars(str,char) <=4;

console.log(contains2To4('ooh!', 'o'));
console.log(contains2To4('oh!', 'o'));
console.log(contains2To4('oooh!', 'o'));
console.log(contains2To4('ooooh!', 'o'));
console.log(contains2To4('oooooh!', 'o'));
console.log('/n'); */


/* const countStr = (str, char) =>
    str.split('').map(ch => ch === char).length;

const occur2To4 = (str,char) => countStr(str, char) >=2 && countStr(str, char) <=4;

console.log(occur2To4('ooh!','o'));
console.log(occur2To4('oh!','o'));
console.log(occur2To4('oooh!','o'));
console.log(occur2To4('ooooh!','o'));
console.log(occur2To4('oooooh!','o')); ---wronng because .map(will return true).filter only give the char. */

/* JavaScript Practice Exercise for Beginners
==========================================

Beginner Exercises: Part 3 */

/* Exercise 1:
-----------
Write a JavaScript program to find the number of even
digits in an array of integers */

/* const evenNumber = (arr) => {
    let count=[];
    for(let i = 0;i<arr.length;i++) {
        if(arr[i]%2==0) {
            count.push(arr[i]);
        }
    }
    return `${count.length} of even number in this array and the even numbers are [${count}]`;
} 
let arr = [2,6,4,3,5,22];
console.log(evenNumber(arr)); */

/* const countEvenNumbers = (arr) => arr.filter(num => num%2 === 0).length;

console.log(countEvenNumbers([1,2,3,4,5,6]));
console.log(countEvenNumbers([2,2,2,2,2,2]));
console.log(countEvenNumbers([3,5,7,9,10,100])); */

/* function countEvenNumbers(arr) {
    let arrCount = [];
    for(let i = 0;i< arr.length;i++) {
        if(arr[i]%2==0) {
            arrCount.push(arr[i]);
        }
    } 
    return `The Number of Even number in Array is ${arrCount.length} and the numbers are [${arrCount}]`;
}

console.log(countEvenNumbers([1,2,3,4,5,6])); */


/* Exercise 2:
-----------
Write a JavaScript program to find the number of even
values up to a given number */

/* const evenValues = (n) => {
    let ans=[];
    for(let i =1; i<=n;i++) {
        if(i%2==0) {
            ans.push(i);
        }
    }
    return ans.length;
}

console.log(evenValues(9)); */

/* const evenNum = (x) => x.filter(num => num%2==0).length;

const createArrayOfNumber = (num) => {
    const returnArray = [];
    for(let i=1;i<=num;i++) {
        returnArray.push(i);
    }
    return returnArray;
}

console.log(evenNum(createArrayOfNumber(9))); */

/* function evenNumber(n) {
    let arr = [];
    for(let i =1; i<= n; i++) {
        if(i%2==0) {
            arr.push(i);
        }
        
    }
    for(let j = 0;j<arr.length;j++) {
      console.log(arr[j] + ' is an Even number');
    } 
}

evenNumber(5); */

/* Exercise 3:
-----------
Write a JavaScript program to check whether a given Array
of integers is sorted in ascending order */

/* const ascendingOrder = (arr) => {
    for (let i=0;i < arr.length -1;i++) {
        if(arr[i]>arr[i+1]) {
            return false;
        }
        
    }
    return true;
}

console.log(ascendingOrder([1,2,3,4,5,6]));
console.log(ascendingOrder([1,2,5,4,3,6]));
console.log(ascendingOrder([1,2,3,4,6,6])); */

/* const isAscending = (arr) => {
    for(let i=0;i< arr.length;i++) {
        if(arr[i] > arr[i+1]) return false;
    }
    return true;
}
    
console.log(isAscending([1,2,3,4,5,6]));
console.log(isAscending([1,2,5,4,3,6]));
console.log(isAscending([1,2,3,4,6,6])); */

/* Exercise 4:
-----------
Write a JavaScript program to get the largest even number
from an array of integers */

/* const evenNum = (arr) => arr.filter(num => num%2==0);

const largestEvenNum = (arr) => {
    let largest = [0];
    for(let i =0;i<arr.length;i++) {
        if(arr[i]>largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largestEvenNum(evenNum([1,2,3,4,5,6])));
console.log(largestEvenNum(evenNum([1,2,33,4,5,6])));
console.log(largestEvenNum(evenNum([1,2,33,44,55,6]))); */



/* const largestEven = (arr) => Math.max(...arr.filter(num=> num%2==0));

console.log(largestEven([1,2,3,4,5,6]));
console.log(largestEven([1,2,33,4,5,6]));
console.log(largestEven([1,2,3,44,55,6])); */

/* Exercise 5:
-----------
Write a JavaScript program to replace the first digit in a
string (should contains at least digit) with $ character. */

/* const firstDi = (str) => str.replace(/\d/,'$');

console.log(firstDi('Ganesh Murugan121')); */

/* const replaceFirstDigit = (str)=> str.replace(/[0-9]/,'$'); -- // use g after the end of slash will change all the digit in the code

console.log(replaceFirstDigit('Abcd1Abcde'));
console.log(replaceFirstDigit('A123Abcde'));
console.log(replaceFirstDigit('A1cd1Abcd1')); */

/* function prymid(n) {
    for(i=1;i<=n;i++) {
        let str='';
        for(j=1;j<=n-i;j++) {
            str += ' '; //str = str + ' '
        }
        for(k=1;k<=i;k++) {
            str += '* '; 
        }
        console.log(str);
    }
}

prymid(50); */

/* JavaScript Practice Exercises for Beginners
===========================================
Beginner Exercises: Part 4
-------------------------- */

/* Exercise 1:
-----------
Given a year, report if it is a leap year. */

/* const isLeapYear = (year) => year%4==0 && year%100!=0 || year%400==0? 'leap Year' : 'not a leap year';

console.log(isLeapYear(2016)); */

/* Exercise 2:
-----------
Write a JavaScript program to compare two objects
to determine if the first one contains the same 
properties as the second one (which may also Have
additional properties) */

/* const objA = {a:1, b:2, c:1};
const objB = {a:1, b:1, c:1};
const objC = {a:1, b:1, d:1};

const objectsEqual = (a,b) => 
    Object.keys(a).every(key => b[key]);


console.log(objectsEqual(objA, objB));
console.log(objectsEqual(objA, objC));
console.log(objectsEqual(objB, objC)); */

/* const strIntoArr = (str) => str.split('').join('').replace('esh','5198');

console.log(strIntoArr('ganesh')); */

/* Exercise 3:
-----------
Write a JavaScript program to convert a
comma - separated values (CSV) string to a 2D
array. A new line indicates a new row in the
array. */

/* Example:
--------
abc, def, ghi
jkl, mno, pqr
stu,vwx,yza */

/* const parseCSV = (csvString) => csvString.split('\n').map(row=> row.split(','));

const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;

console.log(parseCSV(str)); */

/* Exercise 4:
-----------
Write a JavaScript program to generate a
random hexadecimal color Code. */

/* const getRandomHexNumber = () => 
    Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () => '#' + Array.from({length: 6}).map(getRandomHexNumber).join('');

console.log(getRandomHexColor()); */

/* const getRandomHexColor = () => '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');

console.log(getRandomHexColor()); */

/* for(i=1;i<=5;i++) {
    let line='';
    for(j=1;j<=5;j++) {
        line +='*';
    }
    console.log(line);
} */

/* Exercise 5:
-----------
Write a JavaScript function that returns true
if the provided predicate function returns
true for all elements in a Collection, false
otherwise. */

/* const arr = (arr) => arr.map((x) => x>0);

console.log(arr([1,2,3,4,0])); */


/* function trueOrFalse(arr) {
    let result = [];
    for(i=0;i<arr.length;i++) {        
        if(arr[i]>0) {
            result.push(true);
        }else {
            result.push(false);
        }
    }
    return result;
};

console.log(trueOrFalse([1,2,3,4,0])); */

/* console.log([1,2,3,4,5].every(x => x > 0));
console.log([1,2,3,4,5].every(x => x > 3)); */

/* const isEveryElem = (arr, fn) => {
    for(let i=0; i<arr.length; i++) {
        if(!fn(arr[i])) {
            return false;
        }
    }
    return true;
};

console.log(isEveryElem([1,2,3,4,5], (x)=>x>0));
console.log(isEveryElem([1,2,3,4,5], (x)=>x>3)); */


/* JavaScript practice Exercises for Beginners
===========================================

Beginner Exercises: Part 5
--------------------------- */

/* Exercise 1:
-----------
Write a JavaScript function that returns a 
passed string with letters in alphabatical
order.
Example string: 'webmaster'
Expected output: 'abeemrstw' */

/* const alp = (str) => str.split('').sort().join('');

console.log(alp('webmaster')); */

/* const alphabeticalOrder = (str) =>
    str.split('').sort((a,b) => a > b ? 1 : -1)
    .join('');

console.log(alphabeticalOrder('webmaster'));
console.log(alphabeticalOrder('javascript')); */

/* function ascendingOrder(str) {
    const charArr = str.split('');
    const len = charArr.length;
    for(let i=0;i<len;i++) {
        for(let j=0;j<len-i-1;j++) {
            if(charArr[j]>charArr[j+1]) {
                const temp = charArr[j];
                charArr[j] = charArr[j+1];
                charArr[j+1] = temp;
            }
        }
    }
    return charArr.join('');
}

console.log(ascendingOrder('ganesh')); */

/* let a = 10;
let b = 11;
let c;
c = b;
b = a;
a = c;

console.log(c); -- this is what happen in the above program */

/* let arr = ['a','b','c'];

let c;

c = arr[0];
arr[0] = arr[1];
arr[1] = c;
console.log(arr);
 */

/* Exercise 2:
-----------
Write a JavaScript function that accepts a
string as a parameter and counts the number
of vowels within the string. */

/* const countVowels = (str) => {
    let name = str.toLowerCase();
    name.split('');
    let count = 0;
    for(i=0;i<str.length;i++) {
        if(name[i] === 'a') {
            count ++;
        }else if(name[i] === 'e') {
            count ++;
        }else if(name[i] === 'i') {
            count ++;
        }else if(name[i] === 'o') {
            count ++;
        }else if(name[i] === 'u') {
            count ++;
        }
    }
    return count;
};

console.log(countVowels('kite'));
 */
/* const countLetters = (str, letters = ['a','e','i','o','u']) => str.split('').filter(s => letters.indexOf(s) > -1).length;

console.log(countLetters('kite')); */

/* Exercise 3:
-----------
Write a JavaScript function to convert an
amount to coins.
Example input: 46 and possible coins 25, 10,
5, 2, 1
output: 25, 10, 10, 1 */

/* const countCoins = (money, coins = [25,10,5,2,1]) => {
    const totalCoins = [];
    for(i=0;i<coins.length;i++) {
        const thisCoinNum = Math.floor(money / coins[i]);
        for(j=0;j<thisCoinNum;j++) {
            totalCoins.push(coins[i]);
        }
        money -= coins[i] * thisCoinNum;
    }
    return totalCoins;
} */


/* function coins(money, coins = [500,200,100,50,20,10,5,2,1]) {
    let totalChange = [];
    for(i=0;i<coins.length;i++) {
        const totalNum = Math.floor(money/coins[i]);
        for(j=0;j<totalNum;j++) {
            totalChange.push(coins[i]);
        }
        money -= coins[i]  * totalNum;
    }
    return totalChange;
}

console.log(coins(116)); */

/* Exercise 4:
-----------
Write a JavaScript function to extract unique
characters from a string. */

/* const getUniqueChars = (str) =>
    str.split('').filter((item, index, arr) => 
        arr.slice(index+1).indexOf(item) === -1
    );

console.log(getUniqueChars('book')); */

/* const testEx = (str) => str.split('').filter((word,index,array) => array.slice(index+1).indexOf(word) === -1);

console.log(testEx('hollogram')); */

/* let arr = ['b','o','o','k'];

let text = arr.slice(0+1);

console.log(text); */

/* const uniqueCharacter = (str) => [...new Set(str.split(''))];

console.log(uniqueCharacter('book')); */

/* Exercise 5:
-----------
Write a JavaScript function to find the first not
repeated character
Example String: 'abacddbec'
Expected Output: 'e' */

/* const getNonRepeatedChars = (str) => str.split('').filter((word,index,arr)=> arr.filter(arrItem => arrItem === word).length == 1);

console.log(getNonRepeatedChars('abacddbec')); */

/* function splitString(str) {
    let arr = [];
    for(i=0;i<str.length;i++) {
        arr.push(str.slice(i,(i+1)));
    }
    return arr;
}

console.log(splitString('book')); */

/* function oper(fun, a,b) {
    return fun(a,b);
}

function add(a,b) {
    return a+b;
}

console.log(oper(add,5,5)); */

/* function arrange(arr) {
    let a = [];
    for(i=0;i<arr.length;i++) {
        for(j=0;j<arr.length-i-1;j++) {
            if(arr[j]>arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(arrange([6,7,1,4,3,5,2])); */

/* function student(allStudents, studentName) {
    studentName = studentName.slice(0,1).toUpperCase() + studentName.slice(1,studentName.length);
    let present = allStudents.includes(studentName);
    if(present === true) {
        return studentName;
    }else {
        return `${studentName} is not present`;
    }
}

console.log(student(['Ganesh','Murugan','Ramesh','Suresh','Dinesh'],'dinesh')); */

/* const groceries = ['milk','bread','eggs','flour','cheese','sugar'];
O(n) --- Algorithm
const searchFound = (items) => {
    for(let i=0; i<groceries.length;i++) {
        if(groceries[i]=== items) {
            console.log(`Found: ${items}`);
        }
    }
}

searchFound('flour'); */

/*const numbers = [1,2,3,4,5];
O(1) --- Algorithm
const getElement = (arr, index) => arr[index];

console.log(getElement(numbers, 0)); */

/* function findPairs(arr) {
    O(n^2) ---- Algorithm
    for(let i =0; i<arr.length;i++) {
        for(let j = i+1; j<arr.length;j++) {
            console.log(`Pair: ${arr[i]}, ${arr[j]}`);
        }
    }
}

const numbers = [1,2,3,4,5];

findPairs(numbers); */

/* class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    get(index) {
        return this.data[index];
    }
    pop () {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
    }
    shift() { */
        /* delete this.data[0];
        this.length--;
        // re-indexing
        for(let i=0;i<this.length;i++) {
            let lastItem = this.data[i];
            this.data[i] = this.data[i+1];
            this.data[i+1] = lastItem;
        }
        delete this.data[this.length]; */ // ---- this is my solution
 /*        const firstItem = delete this.data[0];
        // re-indexing
        for(let i=0;i<this.length;i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return firstItem;
    }

    delete(index) {
        const deleteByIndex = delete this.data[index]; // deleting the index which is given by user
        this.length--;
        // re-indexing
        for(let i = index; i<this.length;i++) {
            let nextItem = this.data[i+1];
            this.data[i] = nextItem;
        }
        delete this.data[this.length];
        return deleteByIndex; // this is my solution
    }
}

const myNewArray = new MyArray();
myNewArray.push('ganesh');
myNewArray.push('Murugan');
myNewArray.push('Kamala');
myNewArray.push('Soundharya');
myNewArray.push('Family');
myNewArray.push('Friends');
console.log(myNewArray.get(2));
myNewArray.pop();
console.log(myNewArray);
myNewArray.pop();
console.log(myNewArray);
myNewArray.shift();
myNewArray.delete(0);
console.log(myNewArray); */

/* function reverseString(str) {
    let convertArray = str.split(''); // convert string to array
    for(let i=0;i<convertArray.length;i++) {
        for(let j=0;j<convertArray.length-i-1;j++) {
            let last = convertArray[j]
            convertArray[j] = convertArray[j+1];
            convertArray[j+1] = last;
        } // reversing the array
        
    }
    return convertArray.join(''); // convert back to string
}

console.log(reverseString('Ganesh Murugan')); */

/* const reverse = (str) => str.split('').reverse().join('');
const palindromes = (str) => {
    if(str === reverse(str)) {
        return 'palindrom';
    }else {
        return 'not a palindrom';
    }
}
let str = 'abba';
console.log(palindromes(str)); */


/* const palindrom = (str) => {
    const storeOrginal = str.toUpperCase();
    let convertArr = str.split('');
    for(let i=0;i<convertArr.length;i++) {
        for(let j=0;j<convertArr.length-i-1;j++) {
            let storeBefore = convertArr[j];
            convertArr[j] = convertArr[j+1];
            convertArr[j+1] = storeBefore;
        }
    }
    const reverseStr = convertArr.join('').toUpperCase();
    if(storeOrginal === reverseStr) {
        return `${str} is a palindrome`;
    }else {
        return`${str} is not a palindrome`;
    }
} */

/* console.log(palindrom('Cddc'));

const palin = (str) => str.split('').reverse().join('') === str;

console.log(palin('tenet')); */

/* const convertInteger = (arr) => Number(String(arr).split('').reverse().join(''));


console.log(convertInteger(5678)); */

// Capitalization
/* const capital = (str) => {
    let splitString = str.split(' ');
    if(splitString.length === 2) {
        let firstLetter = splitString[0].slice(0,1).toUpperCase() + splitString[0].slice(1,splitString[0].length).toLowerCase();
        let secondLetter = splitString[1].slice(0,1).toUpperCase() + splitString[1].slice(1,splitString[1].length).toLowerCase();
        return `${firstLetter} ${secondLetter}`;
    }else {
        let firstLetter = splitString[0].slice(0,1).toUpperCase() + splitString[0].slice(1,splitString[0].length).toLowerCase();
        return `${firstLetter}`;
    }
    
};

console.log(capital('ganesh MURUGAN')); */

/* const capitalize = (str) => {
    return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalize('Ganesh')); */

/* function fizzBuzz(n) {
    let count='';
    for(let i=1;i<=n;i++) {
        if(i%3===0) {
            count += ` Fizz `;
        }else if(i%5===0){
            count += ` Buzz `;
        }else if(i%3===0 && i%5===0) {
            count += ` FizzBuzz `;
        }else {
            count +=  ` ${i} `;
        }
    }
    return count;
}

console.log(fizzBuzz(15)); */

/* const maxProfit = (prices) => {
    let minPrice = prices[0]; // Assume the first day is the cheapest to buy
    let maxProfit = 0;

    for(let i=1;i<prices.length;i++) {
        let currentPrice = prices[i];

        // Update minimum price if the lower price is found
        minPrice = Math.min(minPrice,currentPrice);
        let potantialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, potantialProfit);
    }
    return maxProfit;


}

const prices = [7,1,5,3,6,4];
const profit = maxProfit(prices);
console.log('Maximum Profit:',profit); */

/* const chunk = (arr,size) => {
    let chunked = [];
    for(let i=0;i<arr.length;i+=size) {
        let chunk = arr.slice(i,i+size);
        chunked.push(chunk);
    }
    return chunked;
}

console.log(chunk([1,2,3,4,5],2)); */ //--- not my solution

/* const twoSum = (arr,num) => {
    let result = [];
    for(let i=0;i<arr.length;i++) {
        for(let j = i+1; j<arr.length;j++) {
            if((num-arr[i]) === arr[j]) {
                let indexOfFirst = arr.indexOf(arr[i]);
                let indexOfSecond = arr.indexOf(arr[j]);
                result.push(indexOfFirst);
                result.push(indexOfSecond);
            }
        }
        
    }
    return result;
}

console.log(twoSum([2,7,11,15],26));
console.log(twoSum([1,3,7,9,2],16)); --- my Solution
 */
/* function twoAdd(nums,target) {
    // Loop through each number in the list
    for(let i=0;i<nums.length;i++) {
        // For each number, check the rest of the list
        for(let j=i+1;j<nums.length;j++) {
            // If the current number and the one we''re checking add up to the target, return their indexes
            if(nums[i]+nums[j]===target) {
                return [i,j];
            }
        }
    }
    return [];
} 

const res = twoAdd([1,3,7,9,2],16);

console.log(res); */

// Linked List

// Node
// -> LinkedList

/* class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        let node2 = new Node(value);
        if(!this.head) {
            this.head = node2;
            this.tail = node2;
        }
        this.tail.next = node2;
        this.tail = node2;
        this.length++;
    }
    pop() {

        if(!this.head) {
            return undefined;
        }

        let temp = this.head;
        let prev = this.head;

        for(let i=0;i<temp.next;i++) {
            prev = temp;
            temp = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if(this.length===0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.pop();
console.log(myLinkedList); */


/* 
class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    pop() {
        if(!this.head) {
            return undefined;
        }
        let temp = this.head;
        let prev = this.head;
        while(temp.next) {
            prev = temp;
            temp = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if(this.length===0) {
            this.head = null;
            this.tail = null;
        }
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.pop();
console.log(myLinkedList); */

/* class Node2 {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(value) {
        this.head = new Node2(value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        if(!this.head) {
            this.head = newNode2;
            this.tail = newNode2;
        }
        let newNode2 = new Node2(value);
        this.tail.next = newNode2;
        this.tail = newNode2;
        this.length++;
    }
    pop() {
        if(!this.head) {
            return undefined;
        }
        let temp = this.head;
        let prev = this.head;
        while(temp.next) {
            prev = temp;
            temp = prev.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length===0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        
        let node2 = new Node2(value);
        if(!this.head) {
            this.head = node2;
            this.tail = node2;
        }
        node2.next = this.head;
        this.head = node2;
        this.length++;
        return node2;
    }
    shift() {
        if(!this.head) {
            return undefined;
        }
        // 1. Point the first node/element
        let temp = this.head;
        // 2. Move the head to the next node/element
        this.head = this.head.next;
        // 3. Then remove the first node/element
        temp.next = null;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return temp;
    }
    getFirst() {
        return this.head;
    } 
    getLast() {
        let temp = this.head;
        while(temp) {
            if(!temp.next) {
                return temp
            }

            temp = temp.next;
        }
        return this.tail;
    }
    get(index) {
        let counter = 0;
        let temp = this.head;
        while(temp) {
            if(counter === index) {
                return temp
            }
            counter++;
            temp = temp.next;
        }
        return null;
    }
}

const myList = new SingleLinkedList(1);
myList.push(2);
myList.push(3);
myList.push(4);

myList.pop();
myList.unshift(0);
myList.shift();
console.log(myList.get(2));
console.log(myList);
console.log(myList.getFirst());
console.log(myList.getLast()); */

/* // factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('hello world '+this.radius);
        }
    }
}

const circle = createCircle(1);

circle.draw(); */

// Constructor
/* function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1); */

/* class Circle {
    constructor(radius) {
        console.groupCollapsed('this', this);
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }
}

const another = new Circle(1);

another.draw(); */

/* function Circle(radius) {
    this.radius = radius,
    this.draw = function() {
        console.log('draw');
    }
}

const Circle1 = new Function('radius',`this.radius = radius;this.draw = function() {console.log('draw')}`);
const circle1 = new Circle1(1);

const circle = new Circle(1);



circle1['location'] = {
    x: 1,
    y: 2
}
delete circle1.location;
console.log(circle1);

for(let key in circle1) {
    if(typeof circle1[key] !='function') {
        console.log(key,circle1[key]);
    }
}

const keys = Object.keys(circle1);
console.log(keys); */

/* let number = 10;
function increment(number) {
    number++;
}

increment(number);
console.log(number); */

/* function Circle(radius){
    this.radius = radius;
    this.computeOptimumLocation = function(factor) {
        // .......
        factor = 'Console';
        return factor
    }

    this.draw = function() {
        console.log(this.computeOptimumLocation('Hello World'));
        console.log('draw');
    }
} 

const circle = new Circle(10);
circle.draw(); */

/* function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {x:0, y:0};
    let computeOptimumLocation = function(factor) {
    // ....
    };
    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log('draw');
    };
}

const circle = new Circle(10);
console.log(circle.draw); */

/* function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {
        x: 1,
        y: 1
    };
    

    this.draw = function() {
        console.log('draw');
    };
    Object.defineProperty(this,'defaultLocation', {
        get: function(){
        return defaultLocation;
    }, 
    set: function(value) {
        if(!value.x || !value.y) {
            throw new Error('Invalid Location.');
        }
        defaultLocation = value;
    }
    });
    
}

const circle = new Circle(10);
circle.defaultLocation = 1;
console.log(circle.defaultLocation); */

/* function StopWatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function() {
        if(running) {
            throw new Error('Stopwatch is already running. You need to stop the stopwatch');
        }
        running = true;
        startTime = new Date();
    };
    this.stop = function() {
        if(!running) {
            throw new Error('Stopwatch is already stoped. you need to start the stopwatch')
        }
        running = false;
        endTime = new Date();
        const second = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += second;
    };
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this,'duration',{
        get: function() {
            return duration;
        }
    });
}

const sw = new StopWatch(); */


/* function StopWatch() {
    let startTime, stopTime, running, duration = 0;
    
    this.start = function() {
        if(running) {
            throw new Error('Time is already running.');
        }
        running = true;
        startTime = new Date();
    }

    this.stop = function() {
        if(!running) {
            throw new Error('Time is not running');
        }
        running = false;
        stopTime = new Date();
        const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }

    this.reset = function() {
        startTime = null;
        stopTime = null;
        running = false;
        duration = 0;
    }
    Object.defineProperty(this,'duration',{
        get: function() {
            return duration;
        }
    });
}

const stopWatch = new StopWatch(); */

/* class Circle {
    constructor(width, height, color) {
        console.log('The Circle is being created!');
        
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getArea() {
        return this.width * this.height;
    }

    printDescription() {
        console.log(`I am a Circle ${this.width} X ${this.height}`);
    }
}

const myCircle = new Circle(5,3,'blue');
const myCircle1 = new Circle(10, 5,'red');

console.log(myCircle.printDescription());
console.log(myCircle1.printDescription()); */

/* class Square {
    constructor(width) {
        this.width = width;
        this.heigth = width;
        this.numberOfReqestArea = 0;
    }

    get area() {
        this.numberOfReqestArea++;
        return this.width * this.heigth;
    }

    set area(area) {
        this.width = area;
        this.heigth = this.width;
    }
}

let square1 = new Square(4);
square1.area = 25;
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);

console.log(square1.numberOfReqestArea); */

/* class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }
    static equals(a, b) {
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimention(width, height) {
        return width === height;
    }

}

let square1 = new Square(8);
let square2 = new Square(8);


console.log(Square.equals(square1, square2));
console.log(Square.isValidDimention(6, 6)); */


/* class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    description() {
        console.log(`${this.name} is my name and my age is ${this.age}`);
    }
}

class Programmer extends Person {
    constructor(name, age, yearOfExperience) {
        super(name, age);
        // Custom behaviour
        this.yearOfExperience = yearOfExperience;
    }
    code() {
        console.log(`${this.name} is coding`);
    }
}

const programmers = [
    new Programmer('Don', 56, 12),
    new Programmer('Ganesh', 27,5)
];

function developerSoftware(programmers) {
    // Develp software
    for(let programmer of programmers) {
        programmer.code();
    }
}

let program1 = [
    new Programmer('Ganesh',27,5),
    new Programmer('Murugan', 47, 26)
];

function printDescription(program1) {
    for(let program of program1) {
        program.description();
    }
} 
printDescription(program1)
developerSoftware(programmers); */

/* class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Generic Animal Sound');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        super.makeSound();
        console.log('Woof! Woof!');
    }
}


const a1 = new Animal('Dom');
const a2 = new Dog('jeff');

a1.makeSound();
a2.makeSound(); */

/* class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return item;
    }
    get(index) {
        return this.data[index];
    }
    pop() {
        if(this.length===0) {
            this.length = 0;
            this.data={};
        }else {
            const lastItem = delete this.data[this.length-1];
            this.length--;
            return lastItem;
        }
        
    }
    shift() {
        if(this.length===0) {
            this.length = 0;
            this.data= {};
        }else {
            delete this.data[0];
            this.length--;
            for(let  i=0;i<this.length;i++) {
                this.data[i] = this.data[i+1];
            }
            delete this.data[this.length];
            
            return this.data[0]; 
        }
    }
    delete(index) {
        if(index >= this.length) {
            throw new Error('Sorry the index you are entered is more than or equal to total length');
        }else {
            delete this.data[index];
            this.length--;
            for(let i = index; i<this.length;i++) {
                this.data[i] = this.data[i+1];
            }
            delete this.data[this.length];
            return index
        }
        
    }
}

const myNewArray = new MyArray();
myNewArray.push('Ganesh');
myNewArray.push('Jack');
myNewArray.push('Jhon');
myNewArray.push('Michale');
myNewArray.push('Adam');
myNewArray.push('Tony');
console.log(myNewArray.get(3));

console.log(myNewArray);
myNewArray.delete(5);
console.log(myNewArray); */ // --------- my try

/* function reverseString(str) {
    let arr = str.split('');
    for(let i = 0; i<str.length;i++) {
        for(let j = 0;j<str.length-i;j++) {
            let lastItem = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = lastItem;
        }
    }
    str = arr.join('');
    return str;
}

console.log(reverseString('Apple')); */

/* const reverseStr = (str) => str.split('').reverse().join('');

const palindrome = (str) => {
    if(reverseStr(str) === str) {
        console.log('Palindrome');
    }else {
        console.log('Not a Palindrome');
    }
}

palindrome('hello'); */

/* const integerToString = (num) => {
    let reverse = num.toString().split('').reverse().join('');
    return parseInt(reverse)*Math.sign(num);
}
console.log(integerToString(321)); */

/* const chunkArray = (arr, size) => {
    let chunked = [];
    for(let i = 0;i<arr.length;i+=size) {
        let chunk = arr.slice(i,i+size);
        chunked.push(chunk);
    }
    return chunked;
}

console.log(chunkArray([1,2,3,4,5,6],2)); */

/* const maxProfit = prices => {
    let minPrice = prices[0];
    let maxPrice = 0;

    for(let i=1;i<prices.length;i++) {
        let currentPrice = prices[i];
        
        minPrice = Math.min(minPrice, currentPrice);
        let PotantialPrice = currentPrice - minPrice;
        maxPrice = Math.max(maxPrice, PotantialPrice);
    }
    return maxPrice;
}

const prices = [100,2,4,10,12];
const price = maxProfit(prices);
console.log('Maximum Profit: ', price); */

/* const twoSum = (arr,sum) => {
    let result = [];
    for(let i=0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++) {
            if(sum-arr[i] === arr[j]) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

console.log(twoSum([2,7,11,15],26));
console.log(twoSum([1,3,7,9,2],11)); */

// Node
// LinkedList

/* class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    pop() {
        let temp = this.head;
        let prev = this.head;
        if(!this.head) {
            return undefined;
        }
        for(let i=0;i<this.length-1;i++) {
            prev = temp;
            temp = prev.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;

        this.length++;
        return this;

    }

    shift() {
        if(!this.head) {
            return undefined;
        }

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length===0) {
            this.tail = null;
        }
        return temp;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) {
            return null;
        }
        let temp = this.head;
        for(let i=0;i<this.length;i++) {
            if(!temp.next) {
                return temp;
            }
            temp = temp.next;
        }

        return null;
    }

    get(index) {
        let node = this.head;
        for(let i = 0; i<this.length;i++) {
            if(i === index) {
                return node;
            }else {
                node = node.next;
            }
        }
    }

    set(index, value) {
        let temp = this.get(index);
        if(temp) {
            temp.value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if(index===0) {
            return this.unshift(value);
        }

        if(index === this.length) {
            return this.push(value);
        }
        
        const newNode = new Node(value);
        
        if(index > this.length) {
            newNode.next = null;
        }else {
            const temp = this.get(index - 1);
            newNode.next = temp.next;
            temp.next = newNode;
        }
        this.length++;
        return true;
    }

    size() {
        let counter = 0;
        let temp = this.head;
        while(temp) {
            counter++;
            temp = temp.next;
        }
        return counter;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return true; 
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.pop();
myLinkedList.unshift(0);
myLinkedList.shift();
console.log(myLinkedList.getFirst());
console.log(myLinkedList.getLast());
console.log(myLinkedList.get(2));
console.log(myLinkedList.set(1,12));
console.log(myLinkedList.insert(1,11));
console.log(myLinkedList.size());
myLinkedList.clear();
console.log(myLinkedList); */

/* class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    pop() {
        let temp = this.head;
        let prev = this.head;
        if(!this.head) {
            return undefined;
        }
        while(temp.next) {
            prev = temp;
            temp = prev.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    shift() {
        let temp = this.head;
        if(!this.head) {
            return undefined;
        }
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        } 
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let temp = this.head;
        while(temp) {
            if(!temp.next) {
                return temp;
            }else {
                temp = temp.next;
            }
        }
    }

    get(index) {
        let counter = 0;
        let temp = this.head;
        while(temp) {
            if(counter === index) {
                return temp;
            }else {
                temp = temp.next;
                counter++;
            }
        }
    }

    set(index, value) {
        let temp = this.get(index);
        if(temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index,value) {
        if(index === 0) {
            return this.unshift(value);
        }
        if(index === this.length) {
            return this.push(value);
        }
        const newNode = new Node(value);

        if(index > this.length) {
            newNode.next = null;
        }else {
            const temp = this.get(index - 1);
            newNode.next = temp.next;
            temp.next = newNode;
        }
        this.length++;
        return true;
    }

    size() {
        let counter = 0;
        let temp = this.head;
        while(temp) {
            counter++;
            temp = temp.next;
        }
        return counter;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return true;
    }
}

const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.pop();
myLinkedList.unshift(10);
myLinkedList.unshift(20);
myLinkedList.shift();
myLinkedList.shift();
console.log(myLinkedList.getFirst());
console.log(myLinkedList.getLast());
console.log(myLinkedList.get(3));
console.log(myLinkedList.set(0,11));
myLinkedList.insert(1,12);
console.log(myLinkedList.size());
myLinkedList.clear();

console.log(myLinkedList); */


/* class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    pop() {
        let temp = this.tail;
        if(!this.head) {
            return undefined;
        }
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    shift() {
        let temp = this.head;
        if(!this.head) {
            return undefined;
        }
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        return temp;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);
myDoublyLinkedList.pop();
myDoublyLinkedList.unshift(10);
myDoublyLinkedList.unshift(20);
myDoublyLinkedList.shift();

console.log(myDoublyLinkedList); */

/* class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head
        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = null;
            this.tail = null;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    pop() {
        let temp = this.head;
        let prev = this.head;
        if(!this.head) {
            return undefined;
        }
        while(temp.next) {
            prev = temp;
            temp = prev.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
    }

    reverse() {
        let next = null;
        let prev = null;
        let curr = this.head;
        this.head = this.tail;
        this.tail = curr;
        for(let i = 0;i<this.length;i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return this;
    }
}

const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.reverse();

console.log(myLinkedList); */

// Stack & Queue

/* class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        this.first = new Node(value);
        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
        }
        newNode.next = this.first;
        this.first = newNode;
        this.length++;
        return this;
    }

    pop() {
        let temp = this.first;
        if(!this.first) {
            return undefined;
        }
        this.first = temp.next;
        temp.next = null;
        this.length--;
        if(this.length === 0) {
            this.first = null;
        }
        return temp;
    }
}

const theStack = new Stack(0);
theStack.push(1);
theStack.push(2);
theStack.push(3);
theStack.push(4);
theStack.pop();
theStack.pop();

console.log(theStack); */

// Queue

/* class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        this.first = new Node(value);
        this.last = this.first;
        this.length = 1;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return this;
    }

    dequeue() {
        let temp = this.first;
        if(!this.first) {
            return undefined;
        }
        this.first = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

const myQueue = new Queue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
console.log(myQueue.dequeue());

console.log(myQueue); */

/* class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        this.last = new Node(value);
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.last) {
            this.last = newNode;
        }
        newNode.next = this.last;
        this.last = newNode;
        this.length++;
        return this;
    }

    pop() {
        let temp = this.last;
        if(!this.last) {
            return undefined;
        }
        this.last = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    min() {
        if(!this.last) {
            return undefined;
        }
        let curr = this.last;
        let min = curr.value;
        for(let i=0;i<this.length;i++) {
            if(curr.value<min) {
                min = curr.value;
            }
            curr = curr.next;
        }
        return min;
    }
}

const myStack = new Stack(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.pop();
console.log(myStack.min());

console.log(myStack); */

/* const isValidPhrase = (str) => {
    const stack = [];

    const brackets = {
        '[': ']',
        '{': '}',
        '(': ')'
    };
    for(let char of str) {
        if(brackets[char]) {
            stack.push(char);
        }else {
            const top = stack.pop();
            if(!top || brackets[top] !== char) {
                return false;
            }
        }
    }
    return stack.length ===0;
}

console.log(isValidPhrase('{([]()')); */

/* function reverseString(str) {
    let stack = str.split('');
    for(let i=0;i<str.length;i++) {
        for(let j=0;j<str.length-i;j++) {
            let temp = stack[j];
            stack[j] = stack[j+1];
            stack[j+1] = temp;
        }
        
    }
    return stack.join('');
}


const reversedString = reverseString('Ganesh');
console.log(reversedString); */

/* function reverseString(str) {
    const stack =  [];

    for(let char of str) {
        stack.push(char);
    }

    let reverseStr = '';

    while(stack.length>0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}

const reversedString = reverseString('Hello World');
console.log(reversedString); */

/* class HashTable {
    constructor(size) {
        this.table = new Array(size);
    }

    _hashFunction(key) {
        let sum = 0;

        const PRIME_NUMBER = 31;

        for(let i=0;i<Math.min(key.length, 100);i++) {
            const charCode = key.charCodeAt(0) - 96;
            sum = (sum * PRIME_NUMBER + charCode) % this.table.length;
        }
        return sum;
    }

    set(key, value) {
        const index = this._hashFunction(key);

        if(!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
        return this;
    }

    get(key) {
        const index = this._hashFunction(key);

        if(!this.table[index]) {
            return undefined;
        }

        for(let i=0;i<this.table[index].length;i++) {
            if(this.table[index][i][0]===key) {
                return this.table[index][i][1];
            }
        }
    }

    getAllKeys() {
        const keys = [];

        for(let i=0;i<this.table.length;i++) {
            if(this.table[i]) {
                for(let j=0;j<this.table[i].length;j++) {
                    keys.push(this.table[i][j][0]);
                }
            }
        }
        return keys;
    }

    getAllValues() {
        const values = [];

        for(let i=0;i<this.table.length;i++) {
            if(this.table[i]) {
                for(let j=0;j<this.table[i].length;j++) {
                    values.push(this.table[i][j][1]);
                }
            }
        }
        return values;
    }
}


const ht = new HashTable(5);
ht.set('ganesh', '9840983239');
ht.set('murugan', '9940463239');
ht.set('kamala', '9790815063');
console.log(ht.get('ganesh'));
console.log(ht.getAllKeys());
console.log(ht.getAllValues());

console.log(ht); */

// const text = 'Hello my name name name is ganesh';

/* const wordCount = (str) => {
    let strArr = str.split(' ');

    let wordMap = [];
    for(let word of strArr) {
        if(word in wordMap) {
            wordMap[word]++;
        }else {
            wordMap[word] = 1;
        }
    }
    return wordMap;
}

console.log(wordCount(text)); */

/* function twoSum(nums, target) {
    const numMap = {};

    for(let i=0;i<nums.length;i++) {
        const compliment = target - nums[i];
        if(compliment in numMap && numMap[compliment] !== i) {
            return [numMap[compliment], i];
        }
        numMap[nums[i]] = i;
    }

    return [];
}

const nums = [2, 7, 11, 15];

const target = 22;

const result = twoSum(nums, target);

console.log(result); */

/* class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BTS {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;

        while(true) {
            if(newNode.value === temp.value) {
                return undefined;
            }

            if(newNode.value < temp.value) {
                if(temp.left === null) {
                    temp.left = newNode;
                    return this;
                }else {
                    temp = temp.left;
                }
            }else {
                if(temp.right === null) {
                    temp.right = newNode;
                    return this;
                }else {
                    temp = temp.right;
                }
            }
        }
        
    }
}

const tree = new BTS();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);

console.log(tree); */

/* class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    } 
}

class BTS {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if(this.root == null) {
            this.root = newNode;
        }

        let temp = this.root;

        while(true) {
            if(newNode.value === temp.value) {
                return undefined;
            }
            
            if(newNode.value < temp.value) {
                if(temp.left === null) {
                    temp.left = newNode;
                    return this;
                }else {
                    temp = temp.left;
                }
            }else {
                if(temp.right === null) {
                    temp.right = newNode;
                    return this;
                }else {
                    temp = temp.right;
                }
            }
        }
    }

    binerySearch(value) {
        if(!this.root) {
            return false;
        }
        let temp = this.root;

        if(value === temp.value) {
            return true;
        }

        while(temp) {
            if(value < temp.value) {
                temp = temp.left;
            }else if(value > temp.value) {
                temp = temp.right;
            }else if(value === temp.value) {
                return true;
            }
        }
        return false;
    }
}

const tree = new BTS();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree.binerySearch(4));

console.log(tree); */

// Recurssion
/* function countDown(number) {
    if(number === 0) {
        console.log('stoped the function');
        return;
    }
    console.log(number);
    countDown(number - 1);
}

console.log(countDown(100)); */

/* const factorial = (n) => {
    if(n===0) {
        return 1;
    }
    console.log('factorial number: ' + n);
    return n*factorial(n-1);
}

console.log(factorial(8)); */

/* const factorial = (number) => {
    return number === 0 ? 1 : number * factorial(number - 1);
}

console.log(factorial(4)); */

/* class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BTS {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode;
        }

        let temp = this.root;

        while(true) {
            if(newNode.value === temp.value) {
                return undefined;
            }

            if(newNode.value < temp.value) {
                if(temp.left === null) {
                    temp.left = newNode;
                    return this;
                }else {
                    temp = temp.left;
                }
            }else {
                if(temp.right === null) {
                    temp.right = newNode;
                    return this;
                }else {
                    temp = temp.right;
                }
            }
        }
    }

    binearySearch(value) {
        if(!this.root) {
            return undefined;
        }

        if(value === temp.value) {
            return true;
        }

        let temp = this.root;
        while(temp) {
            if(value < temp.value) {
                temp = temp.left;
            }else if(value > temp.value) {
                temp = temp.right;
            }else if(value === temp.value) {
                return true;
            }
        } 
    }

    bfs() {
        let current = this.root;
        const queue = [];
        const data = [];

        queue.push(current);

        while(queue.length) {
            current = queue.shift();

            data.push(current.value);

            if(current.left) {
                queue.push(current.left);
            }
            if(current.right) {
                queue.push(current.right);
            }
        }
        return data;
    }
    dfsPreorder(node = this.root, data=[]) {
        if(node === null) {
            return data;
        }

        data.push(node.value);

        if(node.left) {
            this.dfsPreorder(node.left,data);
        }
        if(node.right) {
            this.dfsPreorder(node.right, data);
        }
        return data;
    }
}

const bt = new BTS();

bt.insert(5);
bt.insert(3);
bt.insert(8);
bt.insert(1);
bt.insert(7);
bt.insert(9);
console.log(bt.bfs());
console.log(bt.dfsPreorder());

console.log(bt); */


/* class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BTS {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;

        

        while(true) {
            if(newNode.value === temp.value) {
                return undefined;
            }
            if(newNode.value < temp.value) {
                if(temp.left === null) {
                    temp.left = newNode;
                    return this;
                }else {
                    temp = temp.left;
                }
            }else {
                if(temp.right === null) {
                    temp.right = newNode;
                    return this;
                }else {
                    temp = temp.right;
                }
            }
        }
    }

    includes(value) {
        if(!this.root) {
            return false;
        }

        if(value === this.root) {
            return true;
        }

        let temp = this.root;

        while (temp) {
            if(value < temp.value) {
                temp = temp.left;
            }else if(value > temp.value) {
                temp = temp.right
            }else if(value === temp.value) {
                return true;
            }
        }
        return false;
    }
    bfs() { //Breadth for search
        let current = this.root;

        let queue = [];
        let data = [];

        queue.push(current);
        while(queue.length) {
            current = queue.shift();
            data.push(current.value);

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return data;
    }
    dfsPreOrder(node = this.root, data=[]) { //depth for search
        if(node === null) {
            return data;
        }

        data.push(node.value);
        if(node.left) {
            this.dfsPreOrder(node.left,data);
        }
        if(node.right) {
            this.dfsPreOrder(node.right,data);
        }
        return data;
    }

    dfsPostOrder(node = this.root, data=[]) {
        if(node ===null) {
            return data;
        }

        if(node.left) this.dfsPostOrder(node.left, data);
        if(node.right) this.dfsPostOrder(node.right, data);
        data.push(node.value);
        return data; 
    }
}


const tree = new BTS();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree.includes(3));
console.log(tree.bfs());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());

console.log(tree); */

/* class Graph {
    constructor() {
        this.adjencyList = {};
    }

    addVertex(vtx) {
        if(!this.adjencyList[vtx]) {
            this.adjencyList[vtx] = [];
            return true;
        }
        return false;
    }

    addEdges(vtx1, vtx2) {
        if(this.adjencyList[vtx1] && this.adjencyList[vtx2]) {
            this.adjencyList[vtx1].push(vtx2);
            this.adjencyList[vtx2].push(vtx1);
            return true;
        }
        return false;
    }

    removeEdges(vtx1, vtx2) {
        if(this.adjencyList[vtx1] && this.adjencyList[vtx2]) {
            this.adjencyList[vtx1] = this.adjencyList[vtx1].filter((v) => v !== vtx2);
            this.adjencyList[vtx2] = this.adjencyList[vtx2].filter((v) => v !== vtx1);
            return true;
        }
        return false;
    }

    removeVertex(vtx) {
        if(!this.adjencyList[vtx]) return undefined;

        for(let neighbor of this.adjencyList[vtx]) {
            this.adjencyList[neighbor] = this.adjencyList[neighbor].filter((v)=> v !== vtx);
        }
        delete this.adjencyList[vtx];
        return this;
    }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addEdges('A','B');
g.addEdges('A','E');
g.addEdges('B','C');
g.addEdges('C','D');
g.addEdges('D','E');
g.removeEdges('A', 'B');
g.removeVertex('B');


console.log(g); */

// bubble sort
/* function bubbleSort(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const myArr = [4, 2, 6, 5, 1, 3];

console.log(bubbleSort(myArr)); */

// Selection sort
/* function selectionSort(arr) {
    for(let i = 0;i < arr.length; i++) {
        let minIndex = i;

        for(let j = i+1;j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if(i!==minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

const myArr = [4,2,6,5,1,3];
console.log(selectionSort(myArr)); */

/* function insertionSort(arr) {
    for(let i = 1;i<arr.length;i++) {
        let key = arr[i];
        let j = i - 1;
        while(j>=0 && arr[j]>key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

const myArr = [4,2,6,5,1,3];
console.log(insertionSort(myArr)); */
/* // Merge Sort Function
function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}

// Merge Function

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length) {
        if(left[i]<right[j]) {
            result.push(left[i]);
            i++;
        }else {
            result.push(right[j]);
            j++;
        }
    }
    result.push(...left.slice(i));
    result.push(...right.slice(j));
    return result;
}

const res = [3,27,38,43,9,10,17,82];
console.log(mergeSort(res)); */

// Challenge #1
/* function sumArr(arr) {
    let count = 0;

    for(let i=0;i<arr.length;i++) {
        count += arr[i];
    }
    return `The sum of array is ${count}`;
}

const myArr = [4,2,6,5,1,3];
console.log(sumArr(myArr)); */

// Challenge #2
/* function findMax(arr) {
    let max = arr[0];
    for(let num of arr) {
        if(num > max) {
            max = num;
        }
    }
    return `The maximum value in the array is ${max}`;
}

const myArr = [4,2,9,5,1,7];
console.log(findMax(myArr)); */

// Challenge #3
/* function reverseStr(str) {
    let arr = str.split('');
    let reverseArr = [];
    for(let i = arr.length-1;i>=0;i--) {
        reverseArr.push(arr[i]);
    }
    let reverseString = reverseArr.join('');
    return `${str} in reverse is ${reverseString}`;
}

const myStr = 'hello';
console.log(reverseStr(myStr)); */

// Challenge #4
/* function reverseStr(str) {
    let arr = str.split('');
    for(let i = 1;i<arr.length;i++) {
        for(let j = 0;j<arr.length-i;j++) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
    let reversedStr = arr.join('');
    if(reversedStr === str) {
        return `${str} is palindrome`;
    }else {
        return `${str} is not a palindrome`;
    }
}

const myStr = 'tenet';
console.log(reverseStr(myStr)); */

// Challenge #5
/* function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for(let i=0;i<arr.length;i++) {
        if(min > arr[i]) {
            min = arr[i];
        }else if(max < arr[i]) {
            max = arr[i];
        }
    }
    return `${min} is the minimum value of the array and ${max} is the maximum value of the array`;
}

const myArr = [4,2,9,5,1,7];
console.log(findMinMax(myArr)); */

// Challenge #6
/* function findVowels(str) {
    let vowels = ['a','e','i','o','u'];
    let result = [];
    for(let word of str) {
        for(let vow of vowels) {
            if(word === vow) {
                result.push(word);
            }
        }
    }

    return `${result.length} (${result})`;
}

const name = 'ganesh';
console.log(findVowels(name)); */

// Challenge #7
/* function findVowels(str) {
    const vowels = ['a','e','i','o','u'];

    let obj = {};

    for(let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            if(obj[char]) {
                obj[char]++
            }else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}

console.log(findVowels('programming')); */

// Challenge #8
/* const removeDuplicate = function(arr) {
    let result = [];

    for(let num of arr) {
        if(result.includes(num)) {
            console.log('duplicate num: ' + num);
        }else {
            result.push(num);
        }
    }
    return result;
}

const myArr = [1,2,2,3,4,4,5];

console.log(removeDuplicate(myArr)); */

// set method

/* const uniqueArr = function (arr) {
    return [...new Set(arr)];
}

const array = [1,2,2,3,4,4,5];
console.log(uniqueArr(array)); */

// Challenge #9 - Factorial of a Number

/* function factorial(n) {
    let factorial = 1;
    for(let i=n;i>=1;i--) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(5)); */

// Recursion
/* function recursionFactorial(n) {
    if(n === 0) {
        return 1;
    }
    return n * recursionFactorial(n-1);
}

console.log(recursionFactorial(5)); */

// Challenge #10
/* function fibonacci(n) {
    
    if(n===0) {
        return [];
    }
    if(n===1) {
        return [0];
    }

    let arr = [0,1];
    for(let i=2;i<n;i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr;
}

console.log(fibonacci(5)); */

// Recursive
function fibonacci(n) {
    fibonacci(0) = [];
    fibonacci(1) = [0];
    fibonacci(n) =  fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(7));