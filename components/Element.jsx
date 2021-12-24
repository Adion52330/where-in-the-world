import Router from "next/router";
import React from "react";

const Element = ({
  img,
  population,
  region,
  capital,
  name,
  darkTheme,
  code,
}) => {
  return (
    <div
      // ref={ref}
      className={`cursor-pointer transition ${
        darkTheme ? "bg-white" : "bg-dark-blue"
      } rounded-lg shadow-md w-full ${
        darkTheme ? "text-black" : "text-white"
      } lg:w-[18rem] hover:shadow-lg hover:-translate-y-0.5 transition`}
      onClick={() => Router.push(`/${name}`)}
    >
      <img
        className="rounded-lg object-cover w-full rounded-br-none rounded-bl-none"
        src={img}
        alt=""
      />
      <div className="p-7">
        <h2 className="text-2xl pb-2 font-bold">{name}</h2>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </div>
  );
};
export default Element;
