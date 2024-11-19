export async function openModal(modalId) {
  const modal = document.getElementById(modalId);

  if (modalId === 'modalIngresos') {
    const tbody = modal.querySelector('tbody');
    tbody.innerHTML = '';

    try {
      const ruta = "/transaction/detalleIngresos";
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