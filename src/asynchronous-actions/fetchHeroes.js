import axios from "axios";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheroesBAD");
};

export default fetchHeroes;
