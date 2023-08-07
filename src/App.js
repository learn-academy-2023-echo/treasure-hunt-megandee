import React, { useState } from "react"
import Square from "./components/Square"

import "./App.css"

const App = () => {

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    // set condition for if treasure local is same as clicked index
    if(clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎"
      setBoard(updateBoard)
    } else if (clickedSquare === bombLocation)
    {
    updateBoard[clickedSquare] = "💣"
    setBoard(updateBoard)
    } else {
      updateBoard[clickedSquare] = "🌳"
      setBoard(updateBoard)
    }
  }
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  )
  // console.log(treasureLocation)

  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  )


  
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {board.map((square, index) => {
        return <Square 
        square={square} 
        index={index} 
        key={index} 
        handleGamePlay={handleGamePlay}
        />
      })}
      </div>
    </>
  )
}

export default App
