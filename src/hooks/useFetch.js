import { useState, useEffect } from "react";

const useFetch = (url, num) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let res;
      try {
        res = await fetch(url);
      } catch (err) {
        console.log("error", err);
      }
      if (res) {
        return res.json();
      }
    }

    fetchData().then(data => setData(data));
  }, [url, num]);

  return {
    data,
    setData
  };
};

export default useFetch;