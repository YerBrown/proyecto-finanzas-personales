import {iconMap,colores} from './home.js';

export async function openModal(modalId) {
  const modal = document.getElementById(modalId);

  if (modalId === 'modalIncomes') {
    const tbody = modal.querySelector('tbody');
    tbody.innerHTML = '';

    try {
      const ruta = "/income/incomesDetail";
      const response = await fetch(ruta);
      
      if (!response.ok) throw new Error('Network response was not ok ' + response.statusText + "RUTA FETCH " + ruta);

      let incomes = await response.json();
      let totalAmountIncomesType = incomes.totalAmountIncomes;
      incomes.incomeCounts.forEach((income, index) => {  

        let incomeAmount = income.totalAmount / 100;
        let incomePercent = Math.round((incomeAmount / totalAmountIncomesType) * 100);
      
        // Crear la fila de la tabla
        const tr = document.createElement('tr');
      
        
      
        const tdIncomeTypeValue = document.createElement('td');
        tdIncomeTypeValue.id = "tdIncomeTypeValue";
        tdIncomeTypeValue.textContent = income.income_type.name;

        /* ICONOS DETALLE INGRESOS */
        const tdIncomeTypeIcon = document.createElement('td');
        const icon = document.createElement('i');
        tdIncomeTypeIcon.id = "tdIncomeTypeIcon";
        //icon.innerHTML = `<i class="fas ${iconMap[type] || 'fa-question'}"></i>`;
        icon.className = `fas ${iconMap[income.income_type.name]}`;
        tdIncomeTypeIcon.appendChild(icon);
      
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