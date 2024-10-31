/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

const AvailablePlayers = ({ handleChoose }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {players.map((player, idx) => (
          <SinglePlayer
            key={idx}
            player={player}
            handleChoose={handleChoose}
          ></SinglePlayer>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
