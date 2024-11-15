document.addEventListener("DOMContentLoaded", function () {

  var ctx = document.getElementById('myPieChart').getContext('2d');
  let totalIncomeValue = parseFloat(document.getElementById("totalIngresos").innerText.replace("Total ingresos: ", "").replace("€", ""));
  //let totalExpenseValue = -1000000;
  let totalExpenseValue = parseFloat(document.getElementById("totalGastos").innerText.replace("Total gastos: ", "").replace("€", ""));
  let totalIncomeExpense = totalIncomeValue + totalExpenseValue;
  let incomePercent = Math.floor((totalIncomeValue/totalIncomeExpense)*100);
  let expensePercent = Math.floor((totalExpenseValue/totalIncomeExpense)*100);
  let totalBalance = totalExpenseValue + totalIncomeValue;

  Chart.register({
    id: 'centerText',
    beforeDraw: function (chart) {
      const ctx = chart.ctx;
      const text = "Total: " + totalBalance+"€";
      ctx.restore();
      ctx.font = 'italic bold 20px Arial';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      if(totalBalance>0){
        ctx.fillStyle = "#8FFFBE";
      }else{
        ctx.fillStyle = "#FF9B9B";
      }
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

document.addEventListener("DOMContentLoaded", function() {
  console.log("entra2");

  // Crear el botón
  var boton = document.createElement('button');
  boton.id = 'nuevo-boton';
  boton.innerText = 'Nuevo Botón';

  // Insertar el botón antes de la tabla
  var table = document.getElementById('tabla-registros');
  if (table) {
    table.parentNode.insertBefore(boton, table);

    // Activamos DataTables
    var dataTable = new DataTable(table, {
      paging: true,
      ordering: true,
      info: true,
      searching: true,
      language: {
        url: "//cdn.datatables.net/plug-ins/2.1.8/i18n/es-ES.json"
      },
      drawCallback: function(settings) {
        var rows = table.querySelectorAll('tbody tr');
        rows.forEach(function(row) {
          row.style.backgroundColor = '#1E1E1E';
        });
      }
    });

    var headers = document.querySelectorAll('#tabla-registros th');

    // Crear un array para almacenar los contadores de clics de cada columna
    var clickCounters = Array(headers.length).fill(0);  // Inicializamos un array con 0

    // Iterar sobre cada <th> para añadir el evento click
    headers.forEach(function(header, index) {
      header.addEventListener('click', function() {
        // Incrementar el contador de clics para esa columna
        clickCounters[index]++;

        // Verificar si se ha hecho 3 clics en esta columna
        if (clickCounters[index] === 3) {
          console.log('Se hizo clic 3 veces en la columna:', index);
        }
      });
    });
  }
});



//FALTA ANULAR ORDENACION Y CAMBIAR COLOR "MOSTRANDO..."



