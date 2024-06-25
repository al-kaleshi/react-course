import { useState } from "react";

export default function Player({initalName, symbol, isActive, onChangeName}) {
    const [edit, setEdit] = useState(false);
    const [playerName, setPlayerName] = useState(initalName);

    const handleEdit = () => {
        setEdit((editing) => !editing);
        if (edit) {
          onChangeName(symbol,playerName)
        }
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value)
    }


    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (edit) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }


  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{edit ? "Save":"Edit"}</button>
    </li>
  );
}
