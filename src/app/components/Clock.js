import React, { useState, useRef, useEffect } from 'react'
import { FaMinus, FaPlay, FaPause, FaStop, FaPlus } from 'react-icons/fa'
import dialBackgroundImage from '../img/dial-background.jpg'

const Clock = () => {
  const [time, setTime] = useState(1500)
  const [timeGoesBy, setTimeGoesBy] = useState(false)
  const dialBackground = useRef()
  const playPauseBtn = useRef()

  useEffect(() => {
    let interval = null
    if (timeGoesBy) {
      dialBackground.current.style.animation = 'background-rotation 60s .4s linear infinite'
      interval = setInterval(() => {
        setTime(previousTime => previousTime - 1)
      }, 1000)
    } else {
      dialBackground.current.style.animation = ''
      dialBackground.current.style.transform = `rotate(${90 + (time % 60) * 6 + 'deg'})`
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timeGoesBy])

  const displayTime = time => {
    if (time < 10) return `0${time}`
    else return time
  }

  const clickOnPlayPause = () => {
    setTimeGoesBy(!timeGoesBy)
    for (const child of playPauseBtn.current.children) {
      child.classList.length === 0 ? child.classList = ['hidden'] : child.classList = []
    }
  }

  const clickOnStop = () => {
    setTimeGoesBy(false)
    setTime(1500)
    playPauseBtn.current.children[0].classList = []
    playPauseBtn.current.children[1].classList = ['hidden']
  }

  return (
    <main className="clock">
      <style id="clock-keyframes"></style>

      <figure className="clock__dial">
        <img
          className="clock__dial__background"
          src={dialBackgroundImage}
          alt=""
          ref={dialBackground}
        />
        <div className="clock__dial__noon"></div>
        <output className="clock__dial__timer">
          {`${displayTime(Math.floor(time / 60))} : ${displayTime(time % 60)}`}
        </output>
      </figure>

      <ul className="clock__control-panel">
        <li className="clock__control-panel__controller">
          <button className="minus-btn" type="button">
            <FaMinus />
          </button>
        </li>

        <li className="clock__control-panel__controller">
          <button
            className="play-pause-btn"
            type="button"
            ref={playPauseBtn}
            onClick={clickOnPlayPause}
          >
            <FaPlay className="" />
            <FaPause className="hidden" />
          </button>
        </li>

        <li className="clock__control-panel__controller">
          <button
            className="stop-btn"
            type="button"
            onClick={clickOnStop}
          >
            <FaStop />
          </button>
        </li>

        <li className="clock__control-panel__controller">
          <button className="plus-btn" type="button">
            <FaPlus />
          </button>
        </li>

      </ul>
    </main>
  )
}

export default Clock
