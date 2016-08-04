$(document).ready(function($) {
  var ctx = document.getElementById("myChart");

  let chartData = {
    type: 'pie',
    data: {
      labels: ["Taxi", "Uber"],
      datasets: [{
        label: 'Probability of finding Taxi VS Uber',
        data: [0.6, 0.4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
          // 'rgba(255, 206, 86, 0.2)'
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)'
          // 'rgba(255, 206, 86, 1)'
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }

  var myChart = new Chart(ctx, chartData);
  // $('#chart').fadeIn()
   $('#uberform').submit((event)=>{
     //make an ajax call
     event.preventDefault()
  let hour = event.target["day_period"].value
  let day = event.target["day_of_week"].value
  // let day = 6
  $.get('http://127.0.0.1:3000/api?hour='+hour+'&day_of_week='+day).done(data=>{
    console.log(data)
    chartData.data.datasets[0].data = [data["Chances of Taxi or Car Service"], data["Chances of an Uber"]]
    myChart.update()

    // console.log(myChart)
  })
   })

});



