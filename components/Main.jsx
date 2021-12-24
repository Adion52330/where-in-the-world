import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import Element from "./Element";

const Main = ({ darkTheme }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filterByRegion, setFilterByRegion] = useState("");

  const getCountries = () => {
    setLoading(true);
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCountries(data);
        console.log(data);
      });
    const filteredCountries = countries.filter(
      (country) => country.name !== "British Indian Ocean Territory"
    );
    setCountries(filteredCountries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  // find the countries that match the search
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setLoading(true);
    const newCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (search === "") {
      getCountries();
    } else {
      setLoading(false);
      setCountries(newCountries);
      if (search === "") {
        getCountries();
      }
    }
  };

  // filter the countries by region
  const handleFilter = (e) => {
    e.preventDefault();
    setLoading(true);
    const newCountries = countries.filter((country) => {
      return country.region
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    if (filterByRegion === "") {
      getCountries();
    } else {
      setLoading(false);
      setCountries(newCountries);
      if (filterByRegion === "") {
        getCountries();
      }
    }
  };

  return (
    <div className="transition">
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      {/* search and filter */}
      <div className="transition flex justify-between p-10 flex-wrap space-y-3 w-full">
        <form
          className={`transition flex items-center p-5 ${
            darkTheme ? "text-dark-gray" : "text-white"
          } shadow-md rounded-md space-x-4 text-xl ${
            darkTheme ? "bg-white" : "bg-dark-blue"
          } w-full lg:w-auto`}
        >
          <i className="fa fa-search text-xl"></i>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search for a country"
            className={`transition focus:outline-none ${
              darkTheme ? "bg-white" : "bg-dark-blue"
            }`}
          />
          <button type="submit" onClick={handleChange}></button>
        </form>
        <div
          className={`transition flex items-center p-5 ${
            darkTheme ? "text-dark-gray" : "text-white"
          } shadow-md rounded-md space-x-4 text-xl ${
            darkTheme ? "bg-white" : "bg-dark-blue"
          } w-full lg:w-auto`}
        >
          <i className="fa fa-filter text-xl"></i>
          <input
            list="countries"
            placeholder="Filter by Region"
            value={filterByRegion}
            onChange={(e) => {
              setFilterByRegion(e.target.value);
              handleFilter(e);
            }}
            className={`transition focus:outline-none ${
              darkTheme ? "bg-white" : "bg-dark-blue"
            }`}
          />
          <datalist id="countries" className="rounded-lg mt-5">
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
          </datalist>
          <button type="submit" onClick={(e) => handleFilter(e)}></button>
        </div>
      </div>
      {loading ? (
        //create a spinner
        <div className="transition flex justify-center items-center h-screen">
          <div className="bg-cyan-500 p-7 rounded-full animate-ping "></div>
        </div>
      ) : (
        <div className="p-10 flex space-x-5 justify-around items-stretch space-y-10 flex-wrap">
          {countries.map((country) => (
            <Element
              key={country.id}
              darkTheme={darkTheme}
              code={country.alpha3Code}
              img={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
              name={country.name}
              // onClick={countryDetailPage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
