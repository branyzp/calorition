import React from 'react';
import * as echarts from 'echarts';

const PieChart = () => {
	// initialize the echarts instance
	var myChart = echarts.init(document.getElementById('main'));
	// Draw the chart
	myChart.setOption({
		title: {
			text: 'ECharts Getting Started Example',
		},
		tooltip: {},
		xAxis: {
			data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
		},
		yAxis: {},
		series: [
			{
				name: 'sales',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20],
			},
		],
	});

	return <div id="main" height="400px" width="600px"></div>;
};

export default PieChart;
