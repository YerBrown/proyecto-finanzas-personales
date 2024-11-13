document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById('myPieChart').getContext('2d');

  Chart.register({
    id: 'centerText',
    beforeDraw: function (chart) {
      const ctx = chart.ctx;
      const text = "TEXTO PRUEBA";
      ctx.restore();
      ctx.font = `bold 15px Arial`;
      ctx.fillStyle = "#fff";
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.fillText(text, centerX, centerY);
      ctx.save();
    }
  });

  var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [60, 40],
        backgroundColor: ['#d67272', '#36a2eb'],
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      cutout: '65%',
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.label + ': ' + tooltipItem.raw + '%';  // Formato del tooltip
            }
          }
        },
        centerText: true
      }
    }
  });
});
