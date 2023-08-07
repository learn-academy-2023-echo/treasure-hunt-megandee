import React from "react"

const Square = ({ square, index }) => {
  
  const handleClick = () => {
    alert(index)
  }
  return (
    <>
      <div className="square" onClick={handleClick}>
        {square}
        </div>
    </>
  )
}
export default Square
