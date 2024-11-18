document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById('myPieChart').getContext('2d');
  let totalIncomesText = document.getElementById('totalIncomes').innerText;
  let totalExpensesText = document.getElementById('totalExpenses').innerText;
  let totalIncomesValue = Math.abs(Number(totalIncomesText.replace(/[^0-9.-]/g, '')));
  let totalExpensesValue = Math.abs(Number(totalExpensesText.replace(/[^0-9.-]/g, '')));
  let totalIncomesExpenses = totalIncomesValue + totalExpensesValue;
  console.log("totalIncomeValue: " + totalIncomesValue + " totalExpenseValue: " + totalExpensesValue);
  let incomePercent = Math.floor((totalIncomesValue / totalIncomesExpenses) * 100);
  let expensePercent = Math.floor((totalExpensesValue / totalIncomesExpenses) * 100);
  let totalBalance = totalIncomesValue - totalExpensesValue;

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
      maintainAspectRatio: false,
      responsive: false,
      cutout: '65%',
      radius: '80%',
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

  Chart.register({
    id: 'centerText',
    beforeDraw: function (chart) {
      const ctx = chart.ctx;
      const text = "Total: " + totalBalance + "€";
      ctx.restore();
      ctx.font = 'italic bold 15px Arial';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillStyle = totalBalance > 0 ? "#8FFFBE" : "#FF9B9B";
      const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.fillText(text, centerX, centerY);
      ctx.save();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var table = document.getElementById('tabla-registros');

  var dataTable = new DataTable(table, {
    paging: true,
    ordering: true,
    info: false,
    searching: true,
    lengthChange: false,
    language: {
      url: "https://cdn.datatables.net/plug-ins/2.1.8/i18n/es-ES.json"
    },
    drawCallback: function (settings) {
      var rows = table.querySelectorAll('tbody tr');
      rows.forEach(function (row) {
        row.style.backgroundColor = '#1E1E1E';
      });

      var info = document.querySelector('.dataTables_info');
      if (info) {
        info.style.color = '#ff6347';
      }
    }
  });
});

// Función para abrir el modal y llenar la tabla de tipos de ingresos
async function openModal(modalId) {
  const modal = document.getElementById(modalId);

  if (modalId === 'modalIngresos') {
    const tbody = modal.querySelector('tbody');
    tbody.innerHTML = '';

    try {
      
      const ruta = "/transaction/detalleIngresos";
      const response = await fetch(ruta);
      if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);
      
      const incomes = await response.json();

      incomes.forEach(income => {
        const tr = document.createElement('tr');

        const tdIncomeTypeIcon = document.createElement('td');
        const icon = document.createElement('i');
        tdIncomeTypeIcon.id = "tdIncomeTypeIcon";
        icon.className = "fa-solid fa-car";
        tdIncomeTypeIcon.appendChild(icon);
        

        const tdIncomeTypeValue = document.createElement('td');
        tdIncomeTypeValue.id = "tdIncomeTypeValue" 
        tdIncomeTypeValue.textContent = income.income_type.name;

        const tdIncomeTypeGrafico = document.createElement('td');
        tdIncomeTypeGrafico.id = "tdIncomeTypeGrafico" 
        const canvas = document.createElement('canvas');
        canvas.id = `grafico-${income.id}`;
        canvas.classList.add('common-chart');
        tdIncomeTypeGrafico.appendChild(canvas);

        tr.appendChild(tdIncomeTypeIcon);
        tr.appendChild(tdIncomeTypeValue);
        tr.appendChild(tdIncomeTypeGrafico);
        tbody.appendChild(tr);

        // Inicializar el gráfico en el canvas
        new Chart(canvas.getContext('2d'), {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [200, 100],
              backgroundColor: ['#d67272', '#36a2eb'],
              hoverOffset: 40,
              borderColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 0
            }]
          },
          options: {
            maintainAspectRatio: false,
            responsive: false,
            cutout: '65%',
            radius: '100%',
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return 'Ingresos: ' + 50 + '%';
                  }
                }
              }
            }
          }
        });
      });
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  modal.style.display = 'block';
}


function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};