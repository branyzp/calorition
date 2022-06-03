import React, { useEffect } from 'react';
import { useState } from 'react';
import MealList from '../Components/MealList';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import BMRcalculator from './BMRcalculator';
import { Link } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const SearchPage = () => {
	const [mealData, setMealData] = useState('');
	const [calories, setCalories] = useState(2000);
	const [diet, setDiet] = useState(null);

	const API_KEY = process.env.REACT_APP_API_KEY3;
	const MEALPLANNERDAY_URL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}&diet=${diet}`;

	// console.log('API Key is ' + API_KEY);
	// console.log('MEALPLANNER URL is ' + MEALPLANNERDAY_URL);

	const handleChangeCalories = (e) => {
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
		setTimeout(() => {
			document.getElementById('nutrients').scrollIntoView();
		}, 1000);
		// console.log(mealData);
	}

	return (
		<div className="mealplannerpage">
			<h1>you are what you eat. </h1>
			<h2>meal planning on the fly.</h2>
			<p>
				if you are experienced and would like to just input your goal calories
				to get a customized meal plan, please input any dietary restrictions you
				might have as well as goal calories. Otherwise, we strongly recommend
				going to the <Link to="/bmr">BMR calculator page</Link> first.
			</p>
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
						min="1000"
						max="10000"
						onChange={handleChangeCalories}
					/>
					<br /> <br />
					<Button
						className="Btn"
						size="medium"
						variant="contained"
						onClick={getMealData}
						endIcon={<RestaurantIcon />}
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
