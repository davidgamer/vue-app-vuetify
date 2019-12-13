import { Line } from 'vue-chartjs';

export default {
   extends: Line,
   data() {
      return {
         datacollection: {
            //Data to be represented on x-axis
            labels: ['Janeiro', 'Fevereiro', 'Março'],
            datasets: [{
               label: 'Acesso',
               backgroundColor: '#268e8d',
               pointBackgroundColor: 'red',
               borderWidth: 1,
               pointBorderColor: '#249EBF',
               //Data to be represented on y-axis
               data: [40, 20, 55]
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
                     display: false
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