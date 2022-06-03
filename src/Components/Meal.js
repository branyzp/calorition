import React from 'react';
import { useState, useEffect } from 'react';
import { Card } from '@mui/material';

const Meal = ({ meal }) => {
	const [images, setImages] = useState('');

	const API_KEY = process.env.REACT_APP_API_KEY;
	const FOOD_ID_URL = `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${API_KEY}&includeNutrition=false`;
	console.log(FOOD_ID_URL);

	useEffect(() => {
		fetch(FOOD_ID_URL)
			.then((response) => response.json())
			.then((data) => {
				setImages(data?.image);
				console.log(data);
			});
	}, []);

	return (
		<div className="mealCard">
			<h1>{meal.title.toLowerCase()}.</h1>
			<img className="mealImg" src={images} alt="recipe" />
			<ul>
				<li>Preparation time: {meal?.readyInMinutes} minutes</li>
				<li>Number of servings: {meal?.servings}</li>
			</ul>

			<a href={meal?.sourceUrl}>Go to recipe</a>
		</div>
	);
};

export default Meal;
