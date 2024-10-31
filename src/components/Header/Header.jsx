/* eslint-disable react/prop-types */
import "./Header.css";


const Header = ({  handleCoin }) => {
  return (
    <div className="w-10/12 mx-auto py-4 mb-10">
      
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
                onClick={handleCoin}
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
