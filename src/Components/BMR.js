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
		<div className="BMRcard" id="BMRcard">
			<h1>
				your BMR is <span className="greentext">{calculatedbmr}</span>{' '}
				calories/day. <hr />
				your goal is : <span className="greentext">{goal}</span>
				<hr />
				In order to achieve your targeted goal, we will aim for your TDEE +{' '}
				<span className="greentext">{goalDifference}</span> calories/day
			</h1>

			<table>
				<thead>
					<tr>
						<th>activity level</th>
						<th>
							target calories (TDEE + goal) <br />
						</th>
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

			<p>
				<b>Exercise:</b> 15-30 minutes of elevated heart rate activity. <br />
				<b>Intense exercise:</b> 45-120 minutes of elevated heart rate activity.
				<br />
				<b>Very intense exercise:</b> 2+ hours of elevated heart rate activity.
			</p>

			<p>
				now that you know what your TDEE is, proceed to <br />
				<Link className="link" to="/Meal%20Planner">
					Meal Planner page
				</Link>{' '}
				and input in the calories to begin generating your own customized meal
				plan!
			</p>
		</div>
	);
};

export default BMR;
