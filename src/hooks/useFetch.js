import { useEffect, useState } from "react";
import wait from "../utils/wait";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleResponse = (response) => {
    return wait(2000).then(() => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    });
  };
  const handleErr = () => {
    setError(true);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch(url)
      .then(handleResponse)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(handleErr);
  }, []);

  return { data, error, isLoading };
}
