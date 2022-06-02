import React, { useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import { useState } from 'react';
import MealList from '../Components/MealList';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const SearchPage = () => {
	const [mealData, setMealData] = useState('');
	const [calories, setCalories] = useState(2000);
	const [diet, setDiet] = useState(null);

	const API_KEY = process.env.REACT_APP_API_KEY3;
	const MEALPLANNERDAY_URL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}&diet=${diet}`;

	// console.log('API Key is ' + API_KEY);
	// console.log('MEALPLANNER URL is ' + MEALPLANNERDAY_URL);

	const handleChange = (e) => {
		setCalories(e.target.value);
	};

	const handleChangeDiet = (e) => {
		setDiet(e.target.value);

		console.log('diet - ' + e.target.value);
	};

	function getMealData() {
		fetch(MEALPLANNERDAY_URL)
			.then((response) => response.json())
			.then((data) => {
				setMealData(data);
				// console.log(data);
			})
			.catch(() => {
				console.log('error');
			});

		// console.log(mealData);
	}

	return (
		<div className="mealplannerpage">
			<h1>Meal plans</h1>
			<p></p>
			<section className="controls">
				<fieldset>
					<h2>select your dietary restrictions.</h2>

					<legend>Diet Restrictions</legend>
					<form>
						<select
							onChange={handleChangeDiet}
							id="dietrestriction"
							name="dietrestriction"
						>
							<option value="null">none</option>
							<option value="Ketogenic">ketogenic</option>
							<option value="Vegetarian">vegetarian</option>
							<option value="Vegan">vegan</option>
							<option value="Paleo">paleo</option>
							<option value="Primal">primal</option>
						</select>
						<h1> </h1>
					</form>
				</fieldset>
				<fieldset>
					<legend>Calorie Count</legend>
					<h2>select your desired daily calorie count.</h2>
					<input
						type="number"
						placeholder="calories - e.g. 2000"
						onChange={handleChange}
					/>
					<Button
						className="Btn"
						size="medium"
						variant="contained"
						onClick={getMealData}
					>
						Get daily meal plan
					</Button>
					<h1> </h1>
				</fieldset>
			</section>
			{mealData && <MealList mealData={mealData} />}
		</div>
	);
};

export default SearchPage;
