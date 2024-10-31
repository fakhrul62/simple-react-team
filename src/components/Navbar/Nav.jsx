import { TbCoinFilled } from "react-icons/tb";

const Nav = ({ coin }) => {
  return (
    <div className="w-10/12 mx-auto sticky top-0 z-50">
      <div className="navbar bg-base-100 mb-5 sticky top-0 z-30">
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
              <span>{coin}</span> Coin
              <TbCoinFilled className="text-amber-300 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
