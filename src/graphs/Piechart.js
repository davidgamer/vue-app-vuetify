import { Pie } from 'vue-chartjs';

export default {
   extends: Pie,
   data() {
      return {
         datacollection: {
            //Data to be represented on x-axis
            labels: ['Janeiro', 'Fevereiro', 'Março'],
            datasets: [{
                backgroundColor: ["#0074D9", "#FF4136", "#2ECC40",],
               pointBackgroundColor: 'red',
               borderWidth: 1,
               hoverBackgroundColor: 'cyan',
               //Data to be represented on y-axis
               data: [33, 33, 33],
               hoverBorderWidth: 6
            }]
         },
         //Chart.js options that controls the appearance of the chart
         options: {

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