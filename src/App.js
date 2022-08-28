import React, { useEffect, useState } from 'react';
import Tile from './Tile.js'
import './App.css';

function App() {
  const [tiles, setTiles] = useState([])
  const [cords, setCords] = useState({positionX : 13, positionY : 5})

useEffect(() => {
  setTiles([])
  for (let y=1; y<11 ; y++){
  for (let x=1; x<26; x++){
    if(y === cords.positionY && x === cords.positionX) {
      setTiles(tiles => [...tiles, <Tile x = {x}  y = {y} checked={true}/>]) }

    else { setTiles(tiles => [...tiles, <Tile x = {x}  y = {y} checked={false}/>]) }
  }}}, [cords])


const moveUp = () => {
  if(cords.positionY === 1) cords.positionY = 11;
  setCords({positionX: cords.positionX, positionY: cords.positionY - 1});
  }
const moveDown = () => {
  if(cords.positionY === 10) cords.positionY = 0;
  setCords({positionX: cords.positionX, positionY: cords.positionY + 1});
}
const moveLeft = () => {
  if(cords.positionX === 1) cords.positionX = 25;
  setCords({positionX: cords.positionX - 1, positionY: cords.positionY});
}
const moveRight = () => {
  if(cords.positionX === 25) cords.positionX = 0;
  setCords({positionX: cords.positionX + 1, positionY: cords.positionY});
}
  return (
    <div>
    <div className="App">
      {tiles}
      
    </div>
    <div className='buttons'>
      <button className='input-key' onClick={moveUp}>Up</button>
    </div>
    <div className='buttons'>
      <button className='input-key'  onClick={moveLeft}>Left</button>
      <button className='input-key'  onClick={moveDown}>Down</button>
      <button className='input-key'  onClick={moveRight}>Right</button>
    </div>
    </div>
  );
}

export default App;


// useEffect(()=> {
//   document.addEventListener("keydown", detectKeyDown, true)
//   , []
//   })
// const detectKeyDown = () => {
//   console.log('x')
// }
