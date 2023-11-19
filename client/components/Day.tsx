import { useState, useEffect } from 'react'

export default function Day() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formattedDate = currentDateTime.toDateString()
  const formattedTime = currentDateTime.toLocaleTimeString()

  return (
    <div className="day">
      <p>Real-time Date: {formattedDate}</p>
      <p>Date: {formattedDate}</p>
      <p>Time: {formattedTime}</p>
    </div>
  )
}
