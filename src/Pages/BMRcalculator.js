import { useTabContext } from '@mui/base';
import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import BMR from '../Components/BMR';

const BMRcalculator = () => {
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [goal, setGoal] = useState('maintain weight');
	const [gender, setGender] = useState('male');
	const [age, setAge] = useState(null);
	const [calculatedbmr, setCalculatedbmr] = useState(null);
	const [goalmetabolicrate, setGoalMetabolicRate] = useState(null);
	const [goalDifference, setGoalDifference] = useState('');

	const handleChangeAge = (e) => {
		setAge(e.target.value);
	};
	const handleChangeHeight = (e) => {
		setHeight(e.target.value);
	};

	const handleChangeWeight = (e) => {
		setWeight(e.target.value);
	};

	const handleChangeGoal = (e) => {
		setGoal(e.target.value);
	};

	const handleChangeGender = (e) => {
		setGender(e.target.value);
	};

	const getGoalBMR = (event) => {
		event.preventDefault();

		//using Mifflin-St Jeor Equation
		let bmr = 0;
		let goalrate = 0;

		if (gender === 'male') {
			bmr = 10 * weight + 6.25 * height - 5 * age - 5;
			if (goal === 'lose fat') {
				goalrate = 10 * weight + 6.25 * height - 5 * age - 5 - 500;
				setGoalDifference('a deficit of 500');
			} else if (goal === 'maintain weight') {
				goalrate = 10 * weight + 6.25 * height - 5 * age - 5;
				setGoalDifference('0');
			} else if (goal === 'gain muscle') {
				goalrate = 10 * weight + 6.25 * height - 5 * age - 5 + 500;
				setGoalDifference('a surplus of 500');
			}
		} else if (gender === 'female') {
			bmr = 10 * weight + 6.25 * height - 5 * age - 161;
			if (goal === 'lose fat') {
				goalrate = 10 * weight + 6.25 * height - 5 * age - 161 - 500;
				setGoalDifference('a deficit of 500');
			} else if (goal === 'maintain weight') {
				goalrate = 10 * weight + 6.25 * height - 5 * age - 161;
				setGoalDifference('0');
			} else if (goal === 'gain muscle') {
				goalrate = 10 * weight + 6.25 * height - 5 * age - 161 + 500;
				setGoalDifference('a surplus of 500');
			}
		}
		setCalculatedbmr(bmr);
		setGoalMetabolicRate(goalrate);
	};

	return (
		<div className="BMRpage">
			<section className="BMR-controls">
				<form onSubmit={getGoalBMR}>
					<fieldset>
						<label>age - </label>
						<input
							id="age"
							type="number"
							placeholder=""
							min="15"
							max="70"
							onChange={handleChangeAge}
						/>
						<br />
						<label>gender - </label>
						<select
							defaultValue="male"
							id="gender"
							name="gender"
							onChange={handleChangeGender}
						>
							<option value="male">male</option>
							<option value="female">female</option>
						</select>
						<br />
						<label>height (cm) - </label>
						<input
							id="height"
							type="number"
							placeholder="height (cm)"
							onChange={handleChangeHeight}
						/>
						<br />
						<label>weight (kg) - </label>
						<input
							id="weight"
							type="number"
							placeholder="weight (kg)"
							onChange={handleChangeWeight}
						/>
						<br />
						<label>goal - </label>
						<select
							defaultValue="maintain weight"
							id="goal"
							name="goal"
							onChange={handleChangeGoal}
						>
							<option value="lose fat">lose fat</option>
							<option value="maintain weight">maintain weight</option>
							<option value="gain muscle">gain muscle</option>
						</select>
						<br /> <br />
						<Button
							className="Btn"
							size="medium"
							variant="outlined"
							type="submit"
							// onClick={getGoalBMR}
						>
							get bmr & goal metabolic rate
						</Button>
					</fieldset>
				</form>
			</section>
			<section className="calculatedBMR">
				{calculatedbmr && (
					<BMR
						calculatedbmr={calculatedbmr}
						goalmetabolicrate={goalmetabolicrate}
						goal={goal}
						goalDifference={goalDifference}
					/>
				)}
			</section>
		</div>
	);
};

export default BMRcalculator;
