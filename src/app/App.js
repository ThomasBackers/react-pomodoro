import React from 'react'
import Clock from './components/Clock'
import ControlPanel from './components/ControlPanel'

const App = () => {
	return (
		<div className="app">
			<header></header>
			<main>
				<div className="container">
					<Clock />
					<ControlPanel />
				</div>
			</main>
			<footer></footer>
		</div>
	)
}

export default App
