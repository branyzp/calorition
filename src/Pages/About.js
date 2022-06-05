import React from 'react';

const About = () => {
	return (
		<div className="aboutpage">
			<video className="cookingvid" playsInline muted autoPlay loop>
				<source src="https://i.imgur.com/uhIjcqC.mp4" type="video/mp4" />
			</video>
			{/* <h1>about calorition</h1> */}

			<h2 className="abouth2">
				calorition is a nutrition app built towards forging the connection
				between people who are passionate about their personal nutrition and the
				knowledge required to make positive changes in their life.
				<br /> <br />
				we recognise that you want to improve yourself, yet it might take some
				time to build up the knowledge essential to facilitate optimal
				performance.
				<br /> <br />
				we are here to assist in <em>exactly</em> that aspect.
			</h2>
		</div>
	);
};

export default About;
