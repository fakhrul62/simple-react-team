import "./Header.css";
import { TbCoinFilled } from "react-icons/tb";

const Header = () => {
  return (
    <div className="w-10/12 mx-auto py-4 mb-10">
      <div className="navbar bg-base-100 mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixtures</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a className="font-bold text-xl">
            <img src="/src/assets/logo.png" />
          </a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixtures</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
          <div className="flex gap-2">
            <button className="btn border px-5 py-2 bg-white">
              <span>0</span> Coin
              <TbCoinFilled className="text-amber-300 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className="hero relative  after:rounded-2xl after:absolute after:top-0 after:w-full after:h-full">
        <div className="text-center w-9/12 mx-auto z-10">
          <div className="flex justify-center">
            <img src="/src/assets/banner-main.png" />
          </div>
          <h1 className="text-3xl font-bold text-white leading-normal my-3">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-white leading-relaxed">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="mt-5 ">
            <span className="border-2 border-emerald-500 pl-1 pr-1 pb-5 pt-4 rounded-lg">
              <button
                className="btn rounded-lg pt-1 pb-1 bg-emerald-500 border-none hover:text-emerald-500 text-black px-10"
                type="button"
              >
                Claim Free Credit
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
