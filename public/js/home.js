document.addEventListener("DOMContentLoaded", function () {

  var ctx = document.getElementById('myPieChart').getContext('2d');
  let totalIncomeValue = parseFloat(document.getElementById("totalIngresos").innerText.replace("Total ingresos: ", "").replace("€", ""));
  let totalExpenseValue = parseFloat(document.getElementById("totalGastos").innerText.replace("Total gastos: ", "").replace("€", ""));
  let totalIncomeExpense = totalIncomeValue + totalExpenseValue;
  let incomePercent = Math.floor((totalIncomeValue/totalIncomeExpense)*100);
  let expensePercent = Math.floor((totalExpenseValue/totalIncomeExpense)*100);
  let totalBalance = totalExpenseValue + totalIncomeValue;

console.log("totalIngresos grafico " + totalIncomeValue)
  Chart.register({
    id: 'centerText',
    beforeDraw: function (chart) {
      const ctx = chart.ctx;
      const text = "Total: " + totalBalance+"€";
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
        data: [expensePercent, incomePercent],
        backgroundColor: ['#d67272', '#36a2eb'],
        hoverOffset: 40,
        borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 0
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
              return tooltipItem.label + 'Ingresos: ' + tooltipItem.raw + '%';
            }
          }
        },
        centerText: true
      }
    }
  });
});
