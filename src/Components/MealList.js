import React from 'react';
import Meal from './Meal';

import * as echarts from 'echarts';

// var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
// var option;

// option = {
// 	tooltip: {
// 		trigger: 'item',
// 	},
// 	legend: {
// 		top: '5%',
// 		left: 'center',
// 	},
// 	series: [
// 		{
// 			name: 'Access From',
// 			type: 'pie',
// 			radius: ['40%', '70%'],
// 			avoidLabelOverlap: false,
// 			label: {
// 				show: false,
// 				position: 'center',
// 			},
// 			emphasis: {
// 				label: {
// 					show: true,
// 					fontSize: '40',
// 					fontWeight: 'bold',
// 				},
// 			},
// 			labelLine: {
// 				show: false,
// 			},
// 			data: [
// 				{ value: 1048, name: 'Search Engine' },
// 				{ value: 735, name: 'Direct' },
// 				{ value: 580, name: 'Email' },
// 				{ value: 484, name: 'Union Ads' },
// 				{ value: 300, name: 'Video Ads' },
// 			],
// 		},
// 	],
// };

// option && myChart.setOption(option);

const MealList = ({ mealData }) => {
	const nutrients = mealData.nutrients;

	return (
		<div id="nutrients">
			<section className="nutrients">
				<h1>your custom macros for today.</h1>

				<ul>
					<li>calories: {nutrients?.calories?.toFixed(0)}</li>
					<li>carbohydrates: {nutrients?.carbohydrates.toFixed(0)}</li>
					<li>fat: {nutrients?.fat.toFixed(0)}</li>
					<li>protein: {nutrients?.protein.toFixed(0)}</li>
				</ul>
			</section>
			<section id="meals" className="meals">
				{mealData.meals.map((meal) => {
					return <Meal className="mealCard" key={meal?.id} meal={meal} />;
				})}
			</section>
		</div>
	);
};

export default MealList;
