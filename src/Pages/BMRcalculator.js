import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import BMR from '../Components/BMR';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

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

		if (height.length === 0 || weight.length === 0 || age.length === 0) {
			alert('please fill in all fields.');
		} else {
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
			setTimeout(() => {
				document.getElementById('BMRcard').scrollIntoView();
			}, 100);
		}
	};

	return (
		<div className="BMRpage">
			<section className="BMR-controls">
				<form onSubmit={getGoalBMR}>
					<fieldset>
						<legend>
							<strong>Basal Metabolic Rate Calculator</strong>
						</legend>
						<p>
							The basal metabolic rate (BMR) is the amount of energy needed
							while resting in a temperate environment when the digestive system
							is inactive. It is the equivalent of figuring out how much gas an
							idle car consumes while parked. In such a state, energy will be
							used only to maintain vital organs, which include the heart,
							lungs, kidneys, nervous system, intestines, liver, lungs, sex
							organs, muscles, and skin. For most people, upwards of ~70% of
							total energy (calories) burned each day is due to upkeep. Physical
							activity makes up ~20% of expenditure and ~10% is used for the
							digestion of food, also known as thermogenesis.
						</p>
						<p>
							In short, BMR refers to the amount of calories which your body
							burns in an 'idle' state. Additional burnt from calories are
							active calories which can be added to the BMR to calculate total
							daily energy expenditure (TDEE).
						</p>
						<p>
							<strong>Mifflin-St Jeor Equation:</strong> <br />{' '}
							<em>For men : </em> BMR = 10W + 6.25H - 5A + 5 <br />
							<em>For women : </em>
							BMR = 10W + 6.25H - 5A - 161 <br /> <br />
							where W refers to bodyweight in kilograms, <br />
							H refers to height in centimetres and <br />A refers to age in
							years.
						</p>
						<hr />
						<h3>
							<strong>Variables affecting BMR </strong>
						</h3>
						<section className="bmrVariables">
							<strong>Muscle Mass</strong> – Aerobic exercises, such as running
							or cycling, have no effect on BMR. However, anaerobic exercises,
							such as weight-lifting, indirectly lead to a higher BMR because
							they build muscle mass, increasing resting energy consumption. The
							more muscle mass in the physical composition of an individual, the
							higher the BMR required to sustain their body at a certain level.{' '}
							<br />
							<br />
							<strong>Age</strong> – The more elderly and limber an individual,
							the lower their BMR, or the lower the minimum caloric intake
							required to sustain the functioning of their organs at a certain
							level. <br />
							<br />
							<strong>Genetics</strong> – Hereditary traits passed down from
							ancestors influence BMR. <br />
							<br />
							<strong>Weather</strong> – Cold environments raise BMR because of
							the energy required to create a homeostatic body temperature.
							Likewise, too much external heat can raise BMR as the body expends
							energy to cool off internal organs. BMR increases approximately 7%
							for every increase of 1.36 degrees Fahrenheit in the body's
							internal temperature. <br />
							<br />
							<strong>Diet</strong> – Small, routinely dispersed meals increase
							BMR. On the other hand, starvation can reduce BMR by as much as
							30%. Similar to a phone that goes into power-saving mode during
							the last 5% of its battery, a human body will make sacrifices such
							as energy levels, moods, upkeep of bodily physique, and brain
							functions in order to more efficiently utilize what little caloric
							energy is being used to sustain it.
							<br />
							<br />
							<strong>Pregnancy</strong> – Ensuring the livelihood of a separate
							fetus internally increases BMR. This is why pregnant women tend to
							eat more than usual. Also, menopause can increase or decrease BMR
							depending on hormonal changes.
							<br />
							<br />
							<strong>Supplements</strong> – Certain supplements or drugs raise
							BMR, mostly to fuel weight loss. Caffeine is a common one.
						</section>
						<hr />
						<p>Use the calculator below to generate your BMR and TDEE.</p>
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
						<label> age - </label>
						<input
							id="age"
							type="number"
							placeholder="ages 15-70"
							min="15"
							max="70"
							onChange={handleChangeAge}
						/>
						<br />
						<label>height (cm) - </label>
						<input
							id="height"
							type="number"
							placeholder="height (cm)"
							min="120"
							max="220"
							onChange={handleChangeHeight}
						/>
						<br />
						<label>weight (kg) - </label>
						<input
							id="weight"
							type="number"
							placeholder="weight (kg)"
							min="30"
							max="150"
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
							sx={{
								backgroundColor: 'black',
							}}
							className="Btn"
							size="medium"
							variant="contained"
							type="submit"
							endIcon={<AccessibilityIcon />}

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
