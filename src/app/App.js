import React from 'react'
import { useState, useEffect } from 'react'
import Clock from './components/Clock'
import ControlPanel from './components/ControlPanel'

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false)
	const [timer, setTimer] = useState({
		minutes: 25,
		seconds: 0
	})

	return (
		<div className="app">
			<header></header>
			<main>
				<Clock isPlaying={isPlaying} timer={timer} />
				<ControlPanel
					isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setTimer={setTimer}
        />
			</main>
			<footer></footer>
		</div>
	)
}

export default App
