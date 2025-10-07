import { useState } from "react";   

export default function NewPlayer({ initialName, symbol}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);    
    function handleEditClick() {
        setIsEditing(editing => !editing); // a good practice when new state depends on old state
       }
    let editablePlayerName = <span type = 'text' className='player-name'>{playerName} </span> 
    
function handleChange(event) {
    setPlayerName(event.target.value);
   }
  if (isEditing) {
    editablePlayerName = <input type = 'text' required value={playerName} onChange={handleChange}/>
   }
return (
    <li>
        <span className = 'player'>
           {editablePlayerName}
            <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
)

}
