import React from 'react'
import image from '../img/clock-background.jpg'

const Clock = () => {
	return (
		<figure className="clock">
			<img 
				className="clock__background"
				src={image}
				alt="Cosmogramma cover, by Flying Lotus"
			/>
			<div className="clock__noon"></div>
		</figure>
	)
}

export default Clock
