import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";

const Details = ({ name, dark }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  });
  const fetchCountriesFromCode = (code) => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };
  return (
    <div
      className={` ${dark ? "bg-gray-200" : "bg-bit-dark-blue"} p-16 ${
        dark ? "text-black" : "text-white"
      }`}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      {/* <Link href="/" passHref> */}
      <div
        className={`flex items-center space-x-2 ${
          dark ? "bg-white" : "bg-dark-blue"
        } ${
          dark ? "text-black" : "text-white"
        } absolute px-10 py-3 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer`}
        onClick={() => {
          window.history.back();
        }}
      >
        <i class="fas fa-long-arrow-left"></i>
        <p>Back</p>
      </div>
      {/* </Link> */}

      <div className="flex pt-20 justify-between flex-wrap">
        <div>
          <img src={data[0]?.flags.png} className="w-[40rem] h-full" alt="" />
        </div>
        <div className="flex flex-col lg:flex-1 lg:pl-[10rem] pt-10 space-y-7">
          <h1 className="text-3xl font-bold lg:pb-10 pb-5 pr-10">
            {data[0]?.name}
          </h1>
          <div className="flex space-x-10">
            <div className="flex flex-col space-y-4">
              <p>
                <b>Native Name: </b>
                {data[0]?.nativeName}
              </p>
              <p>
                <b>Population: </b>
                {data[0]?.population}
              </p>
              <p>
                <b>Region: </b>
                {data[0]?.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {data[0]?.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {data[0]?.capital}
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <p>
                <b>Top Level Domain: </b>
                {data[0]?.topLevelDomain[0]}
              </p>
              <p>
                <b>Currencies: </b>
                {data[0]?.currencies[0].code}
                {"    "}
                {data[0]?.currencies[0].symbol}
              </p>
              <p>
                <b>Languages: </b>
                {data[0]?.languages?.map((lang) => lang.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="flex space-x-7 pt-10 flex-wrap space-y-2 items-center ">
            <b>Border Countries: </b>
            {data[0]?.borders?.map((border) => (
              <p
                onClick={() => {
                  fetchCountriesFromCode(border);
                }}
                className={`px-4 ${
                  dark ? "bg-white text-black" : "bg-dark-blue text-white"
                } rounded-md shadow-md py-2 hover:-translate-y-1 cursor-default transition`}
              >
                {border}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
