import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div
      className={`transition ${darkTheme ? "bg-gray-200" : "bg-bit-dark-blue"}`}
    >
      <Head>
        <title>Country Rest API - Adion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Main darkTheme={darkTheme} />
      {/* component's page */}
    </div>
  );
}
