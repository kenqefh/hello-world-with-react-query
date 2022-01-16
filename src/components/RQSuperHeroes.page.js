import { useQuery } from "react-query";
import fetchHeroes from "asynchronous-actions/fetchHeroes";

const RQSuperHeroesPage = () => {
  // key is used to identify the query in React Query
  // Second argument is the function that will be called when the query is executed
  const results = useQuery("super-heroes", fetchHeroes);
  const { isLoading, data, isError, error } = results;

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
