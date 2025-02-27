function magicHat(obj) {
    obj.age = 10;
    obj = { name: "Ada", age: 20 };
    return obj;
  }
    
  const rabbit1 = { name: "Bob", age: 30 };
    
  const rabbit2 = magicHat(rabbit1);
    
  console.log("rabbit1: ", rabbit1);
  console.log("rabbit2: ", rabbit2);
  