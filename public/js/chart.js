$(document).ready(function($) {
  var ctx = document.getElementById("myChart");

  let chartData = {
    type: 'pie',
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
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

  setTimeout(()=>{
    //make an ajax call
  let hood = 2
  let period = 3
  let day = 6
  $.get('http://localhost:3000/api?hood_id='+hood+'&day_period='+period+'&day_of_week='+day).done(data=>{
    console.log(data)
    chartData.data.datasets[0].data = data["taxi_prob"]
    myChart.update()

    console.log(myChart)
  })
  },2000)

});



