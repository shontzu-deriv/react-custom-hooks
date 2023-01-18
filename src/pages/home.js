import { useEffect, useState } from "react";
import useFetch from "../custom-hooks/useFetch";

const Home = () => {
  const { error, isPending, data } = useFetch(
    "https://restcountries.com/v2/all"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data
        ? data.map((country, index) => {
            return (
              <>
                <p key={index}>{country.name}</p>
                <img src={country.flag} alt="flag" />
              </>
            );
          })
        : "no data found"}
    </div>
  );
};

export default Home;
