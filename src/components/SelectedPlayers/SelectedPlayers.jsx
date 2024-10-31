import { useEffect, useState } from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = () => {
  const [choosen, setChoosen] = useState([]);
  useEffect(() => {
    const getChosenPlayer = JSON.parse(localStorage.getItem("choosenPlayer"));
    if (choosen) {
      setChoosen(getChosenPlayer);
    }
  }, []);
  const handleDelete = (player) => {
    const getChosenPlayer = JSON.parse(localStorage.getItem("choosenPlayer"));
    const newChoosenPlayer = getChosenPlayer?.filter(
      (thisPlayer) => thisPlayer.id !== player
    );
    setChoosen(newChoosenPlayer);
    localStorage.setItem("choosenPlayer", JSON.stringify(newChoosenPlayer));
  };
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-5">
        {choosen?.length !== 0 ? (
          choosen?.map((player, idx) => (
            <SelectedCard
              key={idx}
              player={player}
              handleDelete={handleDelete}
            ></SelectedCard>
          ))
        ) : (
          <p>No Players </p>
        )}
      </div>

      {choosen.length !==0 && (
        <button
        className="mt-10 btn rounded-lg pt-1 pb-1 bg-emerald-500 border-none hover:text-emerald-500 text-black px-10"
        type="button"
      >
        Add More Players
      </button>
      )}
    </div>
  );
};

export default SelectedPlayers;
