import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setdata] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Data is not fetched");
          }
          return res.json();
        })
        .then((data) => {
          setdata(data);
          setPending(false);
          seterror(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setPending(false);
            seterror(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
}
