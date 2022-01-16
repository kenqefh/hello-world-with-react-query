import React, { useState, useEffect } from "react";
import axios from "axios";

const SuperHeroesPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Super Heroes Page</h2>
      {data.map((heroe) => {
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

export default SuperHeroesPage;
