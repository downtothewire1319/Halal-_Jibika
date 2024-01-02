import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const responseData = await response.json();

    //   console.log(responseData)

     
        setData(responseData);
      
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {
    data,
    error,
  };
};

export default useFetch;
