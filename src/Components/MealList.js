import React from 'react';
import Meal from './Meal';

const MealList = ({ mealData }) => {
	const nutrients = mealData.nutrients;

	return (
		<div>
			<section className="nutrients">
				<h1>your custom macros for today.</h1>

				<ul>
					<li>calories: {nutrients?.calories?.toFixed(0)}</li>
					<li>carbohydrates: {nutrients?.carbohydrates}</li>
					<li>fat: {nutrients?.fat}</li>
					<li>protein: {nutrients?.protein}</li>
				</ul>
			</section>
			<section className="meals">
				{mealData.meals.map((meal) => {
					return <Meal className="mealCard" key={meal?.id} meal={meal} />;
				})}
			</section>
		</div>
	);
};

export default MealList;
