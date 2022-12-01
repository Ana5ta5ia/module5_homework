let myMap = new Map();
myMap.set("hi", "hello");
myMap.set("7", "Anastasia");
myMap.set("true",  "1=1");
for (let name of myMap.keys())
console.log(`ключ - ${name} , значение - ${myMap.get(name)}`);