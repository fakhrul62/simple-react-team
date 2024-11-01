/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";


const SinglePlayer = ({ player, handleChoose }) => {
  return (
    <div className="border border-zinc-300 rounded-lg p-5">
      <img src={player.image} className="h-52 w-full object-cover rounded-lg" />
      <div className="flex items-center gap-2 mt-5 text-lg font-semibold">
        <FaUser /> {player.name}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2 text-zinc-500">
          <FaFlag /> {player.country}
        </div>
        <div className="flex items-center">
          <span className="bg-gray-200 px-4 py-1 rounded-xl font-medium">
            {player.position}
          </span>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <span className="font-semibold">Rating</span>
        <span className="flex items-center font-semibold">
          <IoMdStarOutline /> {player.rating}
        </span>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="flex items-center font-semibold">
          Price: ${player.price}
        </span>
        <button
          onClick={() => handleChoose(player)}
          className="bg-white border-zinc-400 border px-5 py-2 font-medium rounded-lg hover:bg-[#06091A] hover:text-white duration-150"
          type="button"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default SinglePlayer;
