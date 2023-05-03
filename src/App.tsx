import { useFetchItems } from "./hooks/useFetchItems";

function App() {
  const { heroes, isLoading, error } = useFetchItems();

  if (isLoading) return <div>LOADING...</div>;
  if (error) return <div>{error}!</div>;
  return (
    <>
      <div className="grid gap-3 grid-cols-auto py-5 px-16">
        {heroes &&
          heroes.map((hero: any, index) => (
            <div
              key={index}
              className="w-full border-gray-500 border-2  rounded-lg text-center overflow-hidden"
            >
              <img
                className="w-full h-60 object-contain border-b-gray-500 border-2"
                src={hero.photo}
                alt={hero.name}
              />
              <div className="font-bold text-lg">{hero.name}</div>
              <div className="font-semibold">{hero.realName}</div>
              <div className="italic">{hero.sex}</div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
