import React from 'react'
import { useRef, useEffect } from 'react'
import image from '../img/clock-background.jpg'

const Clock = ({ isPlaying, timer }) => {
  const clockBackground = useRef()

  useEffect(() => {
    if (isPlaying) 
      clockBackground.current.style.animation = 'background-rotation 60s linear infinite'
    else clockBackground.current.style.animation = ''
  }, [isPlaying])

  const displayTime = time => {
    if (time < 10) return `0${time}`
    else return time
  }

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
