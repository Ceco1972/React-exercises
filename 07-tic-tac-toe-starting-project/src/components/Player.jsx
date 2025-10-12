import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
const [playerName, setPlayerName] = useState(initialName);

const [ isEditing, setIsEditing ] = useState(false);

function handleEditClick() {
  //setIsEditing(isEditing ? false : true);
  //setIsEditing(!isEditing); //schedules a state update to true
  setIsEditing(editing => !editing); // a good practice when new state depends on old state
  if (isEditing) {
    onChangeName(symbol, playerName);
  }
}

function handleChange(event) {
setPlayerName(event.target.value);
}

let editablePlayerName = <span className='player-name'>{playerName}</span>

//let buttonCaption = 'Edit'

if (isEditing) {
//this is called two-way binding - listening to a change in the input and then feeding that value back to the input  
    editablePlayerName = <input type = 'text' required value={playerName} onChange={handleChange}/>
}

  return (
    <li className = {isActive ? 'active' : 'undefined'}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span> 
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>

    </li>
  );
}