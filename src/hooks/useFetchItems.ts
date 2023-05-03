import { useState, useEffect } from "react";
import { getHeroes } from "../api";

export const useFetchItems = () => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getHeroes()
      .then((data: any) => {
        setHeroes(data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { heroes, isLoading, error };
};
