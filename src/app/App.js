import React from 'react'
import { useState } from 'react'
import Clock from './components/Clock'
import ControlPanel from './components/ControlPanel'

const App = () => {
	const [timer, setTimer] = useState({
		minutes: 25,
		seconds: 0
	})

	return (
		<div className="app">
			<header></header>
			<main>
				<Clock timer={timer} />
				<ControlPanel setTimer={setTimer} />
			</main>
			<footer></footer>
		</div>
	)
}

export default App
