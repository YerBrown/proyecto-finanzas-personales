let totalIncomesText;
let totalExpensesText;
let totalIncomesValue;
let totalExpensesValue;
let totalIncomesExpenses = totalIncomesValue + totalExpensesValue;
let incomePercent;
let expensePercent;
let totalBalance;
const colores = [
  { colorClaro: '#FF5733', colorOscuro: '#4C1A0D' }, // Naranja brillante y oscuro
  { colorClaro: '#FFC300', colorOscuro: '#665000' }, // Amarillo brillante y oscuro
  { colorClaro: '#DAF7A6', colorOscuro: '#4A6631' }, // Verde pastel y verde oscuro
  { colorClaro: '#FF33A6', colorOscuro: '#66004C' }, // Rosa brillante y oscuro
  { colorClaro: '#FF6F33', colorOscuro: '#662C0D' }, // Naranja intenso y oscuro
  { colorClaro: '#33FF76', colorOscuro: '#0D4C22' }, // Verde neón y oscuro
  { colorClaro: '#33C4FF', colorOscuro: '#124060' }, // Azul cielo y azul profundo
  { colorClaro: '#FFBD33', colorOscuro: '#664A0D' }, // Mostaza brillante y oscuro
  { colorClaro: '#FF9E33', colorOscuro: '#663D0D' }, // Naranja melocotón y oscuro
  { colorClaro: '#FF3333', colorOscuro: '#660D0D' }, // Rojo intenso y oscuro
  { colorClaro: '#33F0FF', colorOscuro: '#0D4D66' }, // Azul eléctrico y oscuro
  { colorClaro: '#33FFCC', colorOscuro: '#0D4C3A' }, // Turquesa claro y oscuro
  { colorClaro: '#FF33FF', colorOscuro: '#660D66' }, // Fucsia intenso y oscuro
  { colorClaro: '#FFC733', colorOscuro: '#66510D' }, // Oro brillante y oscuro
  { colorClaro: '#FF6FFF', colorOscuro: '#663166' }  // Rosa pastel y magenta oscuro
];




document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById('myPieChart').getContext('2d');
  totalIncomesText = document.getElementById('totalIncomes').innerText;
  totalExpensesText = document.getElementById('totalExpenses').innerText;
  totalIncomesValue = Math.abs(Number(totalIncomesText.replace(/[^0-9.-]/g, '')));
  totalExpensesValue = Math.abs(Number(totalExpensesText.replace(/[^0-9.-]/g, '')));
  totalIncomesExpenses = totalIncomesValue + totalExpensesValue;
  incomePercent = Math.floor((totalIncomesValue / totalIncomesExpenses) * 100);
  expensePercent = Math.floor((totalExpensesValue / totalIncomesExpenses) * 100);
  totalBalance = totalIncomesValue - totalExpensesValue;

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
              const labels = ['Gastos', 'Ingresos'];
              const value = tooltipItem.raw;
              return `${labels[tooltipItem.dataIndex]}: ${value}%`;
            }
          }
        }
      }
    },
    plugins: [{
      id: 'centerTextPrincipal',
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
    }]
  });  
});


/*DATATABLE*/
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

/*MODAL DETALLE INGRESOS */
async function openModal(modalId) {
  const modal = document.getElementById(modalId);

  if (modalId === 'modalIngresos') {
    const tbody = modal.querySelector('tbody');
    tbody.innerHTML = '';

    try {
      const ruta = "/income/detalleIngresos";
      const response = await fetch(ruta);
      if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);

      const incomes = await response.json();

      incomes.forEach((income, index) => {
        let incomeAmount = income.amount / 100;
        let incomePercent = Math.floor((incomeAmount / totalIncomesValue) * 100);
      
        // Crear la fila de la tabla
        const tr = document.createElement('tr');
      
        /* ICONOS DETALLE INGRESOS */
        const tdIncomeTypeIcon = document.createElement('td');
        const icon = document.createElement('i');
        tdIncomeTypeIcon.id = "tdIncomeTypeIcon";
        icon.className = "fa-solid fa-car";
        tdIncomeTypeIcon.appendChild(icon);
      
        const tdIncomeTypeValue = document.createElement('td');
        tdIncomeTypeValue.id = "tdIncomeTypeValue";
        tdIncomeTypeValue.textContent = income.income_type.name;
      
        const tdIncomeTypeGrafico = document.createElement('td');
        tdIncomeTypeGrafico.id = "tdIncomeTypeGrafico";
        const canvas = document.createElement('canvas');
        canvas.id = `grafico-${income.id}`;
        canvas.classList.add('common-chart');
        tdIncomeTypeGrafico.appendChild(canvas);
      
        tr.appendChild(tdIncomeTypeIcon);
        tr.appendChild(tdIncomeTypeValue);
        tr.appendChild(tdIncomeTypeGrafico);
        tbody.appendChild(tr);
      
        // Crear el gráfico con un plugin específico
        new Chart(canvas.getContext('2d'), {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [incomePercent, 100 - incomePercent],
              backgroundColor: [colores[index % colores.length].colorClaro, colores[index % colores.length].colorOscuro],
              hoverOffset: 10,
              borderColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 0
            }]
          },
          options: {
            maintainAspectRatio: false,
            responsive: false,
            cutout: '70%',
            radius: '60%',
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    const value = tooltipItem.raw;
                    return `${value}%`;
                  }
                }
              }
            }
          },
          plugins: [{
            id: `centerTextModal-${income.id}`,
            beforeDraw: function (chart) {
              const ctx = chart.ctx;
              const text = incomePercent + "%";
              ctx.restore();
              ctx.font = 'italic bold 12px Arial';
              ctx.textBaseline = 'middle';
              ctx.textAlign = 'center';
              ctx.fillStyle = colores[index % colores.length].colorClaro;
              const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
              const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
              ctx.fillText(text, centerX, centerY);
              ctx.save();
            }
          }]
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