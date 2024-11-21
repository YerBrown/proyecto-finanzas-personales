import {iconMap,colores} from './mapas.js';

export async function openModal(modalId) {
  const modal = document.getElementById(modalId);

  if (modalId === 'modalExpenses') {
    const tbody = modal.querySelector('tbody');
    tbody.innerHTML = '';
    try {
      const ruta = "/expense/expensesDetail";
      const response = await fetch(ruta);
      if (!response.ok) throw new Error('Network response was not ok ' + response.statusText + "RUTA FETCH " + ruta);

      let expenses = await response.json();
      let totalAmountexpensesType = expenses.totalAmountExpenses;
      
      expenses.expenseCounts.forEach((expense, index) => {  

        let expenseAmount = expense.totalAmount / 100;
        let expensePercent = Math.round((expenseAmount / totalAmountexpensesType) * 100);
      
        // Crear la fila de la tabla
        const tr = document.createElement('tr');
        const tdexpenseTypeValue = document.createElement('td');
        tdexpenseTypeValue.id = "tdexpenseTypeValue";
        tdexpenseTypeValue.textContent = expense.expense_type.name;

        /* ICONOS DETALLE INGRESOS */
        const tdexpenseTypeIcon = document.createElement('td');
        const icon = document.createElement('i');
        tdexpenseTypeIcon.id = "tdexpenseTypeIcon";
        icon.className = `fas ${iconMap[expense.expense_type.name]}`;
        tdexpenseTypeIcon.appendChild(icon);
      
        const tdexpenseTypeGrafico = document.createElement('td');
        tdexpenseTypeGrafico.id = "tdexpenseTypeGrafico";
        const canvas = document.createElement('canvas');
        canvas.id = `grafico-${expense.id}`;
        canvas.classList.add('common-chart');
        tdexpenseTypeGrafico.appendChild(canvas);
      
        tr.appendChild(tdexpenseTypeIcon);
        tr.appendChild(tdexpenseTypeValue);
        tr.appendChild(tdexpenseTypeGrafico);
        tbody.appendChild(tr);
      
        // Crear el gráfico con un plugin específico
        new Chart(canvas.getContext('2d'), {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [expensePercent, 100 - expensePercent],
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
            id: `centerTextModal-${expense.id}`,
            beforeDraw: function (chart) {
              const ctx = chart.ctx;
              const text = expensePercent + "%";
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

window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

export const functions = {
  openModal
};

export default functions;