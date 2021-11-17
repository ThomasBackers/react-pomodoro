import React from 'react'
import { useRef, useEffect } from 'react'
import { FaMinus, FaPlay, FaPause, FaStop, FaPlus } from 'react-icons/fa'

const ControlPanel = ({ isPlaying, setIsPlaying, setTimer }) => {
  const playPauseBtn = useRef()

  const play = (playIcon, pauseIcon) => {
    playIcon.classList = ['hidden']
    pauseIcon.classList = []
  }
  const pause = (playIcon, pauseIcon) => {
    playIcon.classList = []
    pauseIcon.classList = ['hidden']
  }
  const playPause = () => {
    const playIcon = playPauseBtn.current.children[0]
    const pauseIcon = playPauseBtn.current.children[1]
    setIsPlaying(!isPlaying)
    isPlaying ? play(playIcon, pauseIcon) : pause(playIcon, pauseIcon)
  }

  const stop = () => {
    const playIcon = playPauseBtn.current.children[0]
    const pauseIcon = playPauseBtn.current.children[1]
    setIsPlaying(false)
    pause(playIcon, pauseIcon)
    setTimer({
      minutes: 25,
      seconds: 0
    })
  }

  return (
    <ul className="control-panel">
      <li className="control-panel__controller">
        <button className="minus" type="button">
          <FaMinus />
        </button>
      </li>
      <li className="control-panel__controller">
        <button 
          className="play-pause"
          type="button"
          onClick={playPause}
          ref={playPauseBtn}
        >
          <FaPlay />
          <FaPause className="hidden" />
        </button>
      </li>
      <li className="control-panel__controller">
        <button
          className="reset"
          type="button"
          onClick={stop}
        >
          <FaStop />
        </button>
      </li>
      <li className="control-panel__controller">
        <button className="plus" type="button">
          <FaPlus />
        </button>
      </li>
    </ul>
  )
}

export default ControlPanel
