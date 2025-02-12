import match from 'babel-plugin-proposal-pattern-matching/match'

const fib = n=>match(n)(
        (v=1)=>1,
        (v=2)=>1,
        _=>fib(_-1)+fib(_-2)
)

console.log(fib(10))

/*
const example = {
    type: "object",
    value: {
        name: "John",
        age: 30,
        hobbies: ["reading", "writing", "coding"]
    }
}
const result = match(example) {
  { type: "string", value } => `String value: ${value}`,
  { type: "number", value } => `Number value: ${value}`,
  { type: "object", value: { name, age, hobbies } } => 
    `Person: ${name}, Age: ${age}, Hobbies: ${hobbies.join(", ")}`,
  _ => "Unknown pattern"
};
*/