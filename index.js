// Challenge 1
let foo = "abc";

function bar() {
  foo = "xyz";
  console.log(foo);
}

bar();


console.log(foo);
//Challenge 1:
- Answer: xyz and xyz
- Explanation: 



// Challenge 2
let a = 1;

function example(a) {
  a = 10;
  console.log(a); // Console log 1
}

example(a);


console.log(a);  // Console log 2
Challenge 2:
- Answer: 10 and 1
- Explanation:inside function the value of a is 10 so first answer is 10 and then outside of the function is the value invoked which is 1.


// Challenge 3

sayHi();

function sayHi() {
  console.log("Hi there!");
}
Challenge 3:
  - Answer: hi There!
  - Explanation: function has called top of the function which is called inside the fucntion

//challenge 4
const a = { num: 42 };
const b = a; 

b.num = 90;

console.log(a);
Challenge 4:
  - Answer: num:90
  - Explanation: because b value is assigned to a and then b value are changed which is 90


//challenge 5 Bonus
function magicHat(obj) {
    obj.age = 10;
    obj = { name: "Ada", age: 20 };
    return obj;
  }
    
  const rabbit1 = { name: "Bob", age: 30 };
    
  const rabbit2 = magicHat(rabbit1);
    
  console.log("rabbit1: ", rabbit1);
  console.log("rabbit2: ", rabbit2);

  Bonus - Challenge 5:
  - Answer: { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: