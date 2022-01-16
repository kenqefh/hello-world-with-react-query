import { useQuery } from "react-query";
import fetchHeroes from "asynchronous-actions/fetchHeroes";

const RQSuperHeroesPage = () => {
  const results = useQuery("super-heroes", fetchHeroes);
  const { isLoading, data, isError, error } = results;
  console.log(results);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h2> RQSuper Heroes Page</h2>
      {data?.data.map((heroe) => {
        return (
          <div key={heroe.id}>
            <h3>{heroe.name}</h3>
            <p>{heroe.alterEgo}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RQSuperHeroesPage;
