import React, { useState } from "react"
import Square from "./components/Square"

import "./App.css"

const App = () => {

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    updateBoard[clickedSquare] = "🌳"
    setBoard(updateBoard)
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
