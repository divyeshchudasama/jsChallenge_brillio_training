// JavaScript Functional Programming
// /(Hint – use array functions like map, filter, reduce, sort, some, every, forEach etc ).

const coders = [
  { name: "John", age: 23, gender: "m", admin: false },
  { name: "Jane", age: 20, gender: "f", admin: true },
  { name: "James", age: 60, gender: "m", admin: true },
  { name: "Jack", age: 35, gender: "m", admin: true },
  { name: "Jini", age: 30, gender: "f", admin: false },
];

// Find all coders older than 24
let coder1 = coders.filter((i) => i.age > 24);
console.log(coder1, 'all coders older than 24');


// Find the total age of all coders
let age = 0;
for (let i of coders) {
  age = age + i.age;
}
console.log(`Total age of all coders: ${age}`);


// List all female coders
let fcoder = coders.filter((i) => i.gender == "f");
console.log(fcoder, 'all female coders');


//List all admin coders in ascending order
let adminCoder = coders
  .filter((i) => i.admin == true)
  .sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
console.log(adminCoder, 'List all admin coders in ascending order');

// Sort all coders by age
let sortByAge = coders.sort((a,b)=> a.age - b.age);
console.log(sortByAge, 'all coders by age');

// Find the total age of male coders under 25
let totalAge = 0;
let newCoder = coders.filter(i => i.gender == 'm' && i.age < 25);
for(let c of newCoder){
  totalAge += c.age;
}
console.log(`the total age of male coders under 25 is ${totalAge}`);
