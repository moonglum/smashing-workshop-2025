export default async function Dogs() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const dogs = await fetch("https://dog.ceo/api/breeds/list")
    .then((res) => res.json())
    .then((data) => {
      return { ...data };
    });

  return (
    <div>
      <h1>Random Dog Image</h1>
      {dogs.message.map((dog: string) => (
        <div key={dog}>{dog}</div>
      ))}
    </div>
  );
}
