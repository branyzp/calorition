import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="NavBar">
			<Link to="/">
				<img id="logo" src="https://i.imgur.com/s48EraA.png" alt="" />
			</Link>
			<Link className="NavBarLink" to="/about">
				About
			</Link>
			<Link className="NavBarLink" to="/BMR Calculator">
				BMR Calculator
			</Link>
			<Link className="NavBarLink" to="/Meal Planner">
				Mealplanning
			</Link>
		</div>
	);
};

export default Navbar;
