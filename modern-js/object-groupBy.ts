const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 25 },
];

const groupedByAge = Object.groupBy(people, (person) => person.age);

console.log(groupedByAge);

