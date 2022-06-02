import React from 'react';

const Home = () => {
	return (
		<>
			<div className="video-wrapper">
				<video playsInline muted autoPlay loop>
					<source src="https://i.imgur.com/P1hleyN.mp4" type="video/mp4" />
				</video>
				<h1 className="justdoit">
					enough is enough. <br />
					take control of your nutrition. <br />
					take control of your body. <br />
					take control of your life. <br />
				</h1>
			</div>
		</>
	);
};

export default Home;
