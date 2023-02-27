import { useEffect, useState } from "react";

import { axiosRequest } from "../axios/axiosRequest";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        SetLoading(true);
        const res = await axiosRequest.get(url);

        if (!res) {
          throw new Error("Problem fetching data");
        }

        setData(res.data.data);
        SetLoading(false);
      } catch (err) {
        let errorMessage = err.message ? err.message : err;
        setError(errorMessage);
        SetLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
