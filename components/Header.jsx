import Head from "next/head";
import Link from "next/link";

const Header = ({ darkTheme, setDarkTheme }) => {
  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div
      className={`sticky top-0 z-50 p-6 transition ${
        darkTheme ? "bg-white" : "bg-dark-blue"
      } flex justify-between border-b-2 ${
        darkTheme ? "border-gray-300" : "border-dark-blue"
      } ${darkTheme ? "text-black" : "text-white"} shadow-md`}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      {/* Name */}
      <Link href="/" passHref>
        <div>
          <h1 className="text-2xl font-bold pl-10 cursor-pointer">
            Where in the World?
          </h1>
        </div>
      </Link>

      {/* Color switcher */}
      <div
        className="flex items-center space-x-2 cursor-pointer pr-6 transition"
        onClick={changeTheme}
      >
        <i class={`fa ${darkTheme ? "fa-moon" : "fa-sun"}`}></i>
        <p className="transition">{darkTheme ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </div>
  );
};

export default Header;
