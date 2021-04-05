<template>
<div class="app">
	<h1>Bar Chart</h1>
	<bar-chart></bar-chart>
</div>
</template>

<script>
Vue.component('bar-chart', {
	extends: VueChartJs.Bar,
	data: function () {
		return {
			datacollection: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				datasets: [
					{
						label: 'Data One',
						backgroundColor: '#f87979',
						pointBackgroundColor: 'white',
						borderWidth: 1,
						pointBorderColor: '#249EBF',
						data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
					}
]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					enabled: true,
					mode: 'single',
					callbacks: {
						label: function(tooltipItems, data) {
							return '$' + tooltipItems.yLabel;
						}
					}
				},
				responsive: true,
				maintainAspectRatio: false,
				height: 200
}
		}
	},
	mounted () {
		// this.chartData is created in the mixin
		this.renderChart(this.datacollection, this.options)
	}
})

var vm = new Vue({ 
	el: '.app',
})
</script>