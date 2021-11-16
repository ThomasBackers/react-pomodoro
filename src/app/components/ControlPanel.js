import React from 'react'
import { FaMinus, FaPlay, FaStop, FaPlus } from 'react-icons/fa'

const ControlPanel = () => {
  return (
    <ul className="control-panel">
      <li className="control-panel__controller">
        <button className="minus" type="button">
          <FaMinus />
        </button>
      </li>
      <li className="control-panel__controller">
        <button className="play-pause" type="button">
          <FaPlay />
        </button>
      </li>
      <li className="control-panel__controller">
        <button className="reset" type="button">
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
