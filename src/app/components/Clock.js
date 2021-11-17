import React from 'react'
import image from '../img/clock-background.jpg'

const Clock = ({ timer }) => {
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
