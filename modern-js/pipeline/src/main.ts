// Example of pipeline operator with async data transformation
const fetchUserData = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.json();
};

const extractName = (user: any) => user.name;
const makeGreeting = (name: string) => `Hello, ${name}!`;
const addEmoji = (greeting: string) => `${greeting} 👋`;

// Using the pipeline operator with async functions
const greetUser = async (id: number) => {
  const greeting = await fetchUserData(id)
    |> extractName(%)
    |> makeGreeting(%)
    |> addEmoji(%);
    
  console.log(greeting);
};

// Try it out
greetUser(Math.floor(Math.random() * 10));
