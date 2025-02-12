// Example of using Records and Tuples

// Creating a Record
const person = #{
  name: "John",
  age: 30,
  address: #{
    street: "123 Main St",
    city: "New York"
  }
};
console.log("Person record:", person);

// Creating a Tuple 
const coordinates = #[42.361145, -71.057083];
console.log("Coordinates tuple:", coordinates);

// Records are deeply immutable
try {
  person.age = 31; // TypeError
} catch (e) {
  console.log("Cannot modify record:", e.message);
}

// Comparing Records and Tuples
const person2 = #{
  name: "John", 
  age: 30,
  address: #{
    street: "123 Main St",
    city: "New York"
  }
};

console.log("Records are equal:", person === person2); // true

const coords2 = #[42.361145, -71.057083];
console.log("Tuples are equal:", coordinates === coords2); // true

// Using Records in Sets/Maps
const peopleSet = new Set([person, person2]);
console.log("Set size:", peopleSet.size); // 1 (deduped)

