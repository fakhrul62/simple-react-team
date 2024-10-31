import { RiDeleteBin6Line } from "react-icons/ri";
const SelectedCard = ({ player, handleDelete }) => {
  return (
    <div className="border p-5 rounded-xl grid grid-cols-2">
      <div className="flex gap-5 items-center">
        <img src={player.image} className="w-20 rounded-lg" />
        <div>
          <h3 className="font-bold">{player.name}</h3>
          <p className="text-zinc-700">{player.position}</p>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button type="button" onClick={() => handleDelete(player.id)}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;
