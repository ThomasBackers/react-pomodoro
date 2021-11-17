import React from 'react'
import { useState, useEffect } from 'react'
import { FaMinus, FaPlay, FaPause, FaStop, FaPlus } from 'react-icons/fa'

const ControlPanel = ({ setTimer }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const play = () => {}
  const pause = () => {}
  const playPause = () => {
    setIsPlaying(!isPlaying)
    isPlaying ? play() : pause()
  }

  const stop = () => {
    setIsPlaying(false)
    pause()
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
