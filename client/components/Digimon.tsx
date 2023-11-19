import { useEffect, useState } from 'react'

export default function ShowDigimon() {
  const [position, setPosition] = useState({ x: 750, y: 0 })
  const [facingDirection, setFacingDirection] = useState(1) // 1 for right, -1 for left
  //if set to zero, it has zero width then making the digimon disappear.

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      switch (event.key) {
        case 'ArrowLeft':
          moveLeft()
          break
        case 'ArrowRight':
          moveRight()
          break
        default:
          break
      }
    }

    function moveLeft() {
      setFacingDirection(-1)
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: Math.max(prevPosition.x - 10, 150), // Ensure newX is not less than 0 (left boundary)
      }))
    }

    function moveRight() {
      setFacingDirection(1)
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: Math.min(prevPosition.x + 10, window.innerWidth - 150), // Adjust 100 based on your Digimon's width (right boundary)
      }))
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return (
    <>
      <div
        className="digimon"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scaleX(${facingDirection})`,
        }}
      >
        <img src="./img/numemon.gif" alt="numemon" className="numemon" />
        {/* <img src="./img/agumon.gif" alt="agumon" className="agumon" /> */}

        {/* <img src="./img/greymon.gif" alt="greymon" className="greymon" /> */}

        {/* <img src="./img/koromon.gif" alt="koromon" className="koromon" /> */}
      </div>
    </>
  )
}
