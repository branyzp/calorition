import React from 'react';
import { Link } from 'react-router-dom';

const BMR = ({ calculatedbmr, goalmetabolicrate, goal, goalDifference }) => {
	const activitylevelperweek = {
		sedentary: 1.2 * goalmetabolicrate,
		oneToThreeTimes: 1.38 * goalmetabolicrate,
		fourToFiveTimes: 1.465 * goalmetabolicrate,
		dailyExerciseOrThreeToFourTimes: 1.55 * goalmetabolicrate,
		intenseExerciseSixToSevenTimes: 1.72 * goalmetabolicrate,
		veryIntenseExerciseOrPhysicalJob: 1.9 * goalmetabolicrate,
	};

	return (
		<div className="BMRcard">
			<h1>
				your BMR is <span>{calculatedbmr}</span> calories/day. <hr />
				your goal is : <span>{goal}</span>
				<hr />
				your targeted goal will aim for a difference of{' '}
				<span>{goalDifference}</span> calories/day.
			</h1>
			<p>daily caloric needs based on activity level</p>
			<table>
				<thead>
					<tr>
						<th>activity level</th>
						<th>calories</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>sedentary - little to no exercise</td>
						<td>{activitylevelperweek.sedentary.toFixed(0)}</td>
					</tr>
					<tr>
						<td>exercise 1-3 times/week</td>
						<td>{activitylevelperweek.oneToThreeTimes.toFixed(0)}</td>
					</tr>
					<tr>
						<td>exercise 4-5 times/week</td>
						<td>{activitylevelperweek.fourToFiveTimes.toFixed(0)}</td>
					</tr>
					<tr>
						<td>daily exercise or intense exercise 3-4 times/week</td>
						<td>
							{activitylevelperweek.dailyExerciseOrThreeToFourTimes.toFixed(0)}
						</td>
					</tr>
					<tr>
						<td>intense exercise 6-7 times/week</td>
						<td>
							{activitylevelperweek.intenseExerciseSixToSevenTimes.toFixed(0)}
						</td>
					</tr>
					<tr>
						<td>very intense exercise daily, or physical job</td>
						<td>
							{activitylevelperweek.veryIntenseExerciseOrPhysicalJob.toFixed(0)}
						</td>
					</tr>
				</tbody>
			</table>
			<br />
			<br />
			<Link to="/search">Meal Planner</Link>
		</div>
	);
};

export default BMR;
