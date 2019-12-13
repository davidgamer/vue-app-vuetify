import {  Bar } from 'vue-chartjs';

export default {
   extends: Bar,
   data() {
      return {
         datacollection: {
            //Data to be represented on x-axis
            labels: ['Janeiro', 'Fevereiro', 'Março'],
            datasets: [{
               label: 'Pessoas',
               backgroundColor: '#4caf50',
               pointBackgroundColor: 'red',
               borderWidth: 1,
               pointBorderColor: '#249EBF',
               //Data to be represented on y-axis
               data: [950, 80, 55]
            }]
         },
         //Chart.js options that controls the appearance of the chart
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
                  gridLines: {
                     display: true
                  }
               }]
            },
            legend: {
               display: true
            },
            responsive: true,
            maintainAspectRatio: false
         }
      }
   },
   mounted() {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
   }
}