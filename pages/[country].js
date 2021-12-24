import Header from "../components/Header";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import Details from "../components/Details";

const Country = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const router = useRouter();
  let countryName = router.query.country;

  if (
    countryName === "India" ||
    countryName === "india" ||
    countryName === "India" ||
    countryName === "IN" ||
    countryName === "IND"
  ) {
    countryName = "bharat";
  }

  return (
    <div
      className={` transition ${
        darkTheme ? "bg-gray-200" : "bg-bit-dark-blue"
      }`}
    >
      <Head>
        <title>Country Rest API - Adion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Details name={countryName} dark={darkTheme} />
    </div>
  );
};

export default Country;
