import React from 'react'
import { useRef, useEffect } from 'react'
import image from '../img/clock-background.jpg'

const Clock = ({ isPlaying, timer, setTimer, isReset, setIsReset }) => {
  const clockBackground = useRef()
  
  const displayTime = time => {
    if (time < 10) return `0${time}`
    else return time
  }

  useEffect(() => {
    if (isPlaying) {
      clockBackground.current.style.animation = 'background-rotation 60s linear infinite'
    }
    else {
      clockBackground.current.style.animation = ''
      if (isReset === false) 
        clockBackground.current.style.transform = `rotate(${90 - timer.seconds * 6 + 'deg'})`
      else {
        clockBackground.current.style.transform = 'rotate(90deg)'
        setIsReset(false)
      }
    }
  }, [isPlaying])

	return (
    <figure className="clock">
      <img 
      className="clock__background"
      src={image}
      alt="Cosmogramma cover, by Flying Lotus"
      ref={clockBackground}
      />
      <div className="clock__noon"></div>
      <div className="clock__pupil">
        <output name="minutes">
          {displayTime(timer.minutes)} : {displayTime(timer.seconds)}
        </output>
      </div>
    </figure>
    )
}

export default Clock
