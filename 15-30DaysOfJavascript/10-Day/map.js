const map = new Map();

map.set("1", "str").set(1, "num1").set(false, "bool2").set(true, "bool1");

console.log(map);
console.log(map.get("1"));
console.log(map.size);

map.forEach((key, value) => console.log(`${key} : ${value}`));

//////////////////////////

let user1 = { name: "vusala" };
let user2 = { name: "gunel" };

let visitCountMap = new Map();
visitCountMap.set(user1, 10);
visitCountMap.set(user2, 5);
console.log(visitCountMap);
console.log(visitCountMap.get(user1));
console.log(visitCountMap.get(user2));

////////////////////////////

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
console.log(recipeMap);
console.log(recipeMap.keys());
console.log(recipeMap.values());
console.log(recipeMap.entries());

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

for (let amount of recipeMap.values()) {
  console.log(amount);
}

for (let entry of recipeMap.entries()) {
  console.log(entry);
}

recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

//////////////////////////////////

let obj = {
  name: "Vaqif",
  surname: "Selimli",
  age: 19,
};

let mapp = new Map(Object.entries(obj));

console.log(mapp);
console.log(mapp.get("surname"));

//////////////////////////////////

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

console.log(prices)

let mappp = new Map()
mappp.set("banana",1)
mappp.set("orange",2)
mappp.set("meat",4)

let object = Object.fromEntries(mappp)
console.log(object)