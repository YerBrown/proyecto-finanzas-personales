import { openModal as openModalIncome } from "./homeUtils/incomeModal.js";
import { openModal as openModalExpense } from "./homeUtils/expenseModal.js";
import { iconMap } from "./homeUtils/mapas.js";
import { principalGrapich } from "./homeUtils/principalGrapich.js";
import { dataTable } from "./homeUtils/dataTable.js";

document.addEventListener("DOMContentLoaded", function () {
  let totalIncomesText;
  let totalExpensesText;
  let totalIncomesValue;
  let totalExpensesValue;
  let totalIncomesExpenses = totalIncomesValue + totalExpensesValue;
  let incomePercent;
  let expensePercent;
  let totalBalance;
  let dateFrom;
  let dateTo;
  const closeModalIncomes = document.getElementById("modal-close-income");
  const closeModalExpenses = document.getElementById("modal-close-expense");
  const tipoFiltro = document.getElementById("tipo-filtro");
  const fechaDesdeInput = document.getElementById("fechaDesde");
  const fechaHastaInput = document.getElementById("fechaHasta");
  const buttonFilterDates = document.getElementById("buttonFilterDates");
  const fechaMensualInput = document.getElementById("fechaMensual");
  const fechaAnualInput = document.getElementById("fechaAnual");
  const buttonIncomes = document.getElementById("totalIncomes");
  const buttonExpenses = document.getElementById("totalExpenses");
  dateFrom = fechaDesdeInput.value;
  dateTo = fechaHastaInput.value;
  const yearYearly = fechaAnualInput.value.split("-")[0];
  const yearMonthly = fechaMensualInput.value.split("-")[0];
  const month = fechaMensualInput.value.split("-")[1];

  filterType();

  tipoFiltro.addEventListener("change", function () {
    filterType();
  });
  // Controlar cambios en el input de fecha desde
  fechaDesdeInput.addEventListener("change", function () {
    dateFrom = fechaDesdeInput.value;
  });
  // Controlar cambios en el input de fecha hasta
  fechaHastaInput.addEventListener("change", function () {
    dateTo = fechaHastaInput.value;
  });

  buttonFilterDates.addEventListener("click", () => {
    filterByDates(dateFrom, dateTo);
  });
  // Controlar cambios en el input de fecha mensual
  fechaMensualInput.addEventListener("change", function () {
    monthlyFilter(month, yearMonthly);
  });

  fechaAnualInput.addEventListener("change", function () {
    yearlyFilter(yearYearly);
  });

  closeModalIncomes.addEventListener("click", () => {
    closeModal("modalIncomes");
  });

  closeModalExpenses.addEventListener("click", () => {
    closeModal("modalExpenses");
  });

  buttonIncomes.addEventListener("click", () => {
    openModalIncome("modalIncomes");
  });

  buttonExpenses.addEventListener("click", () => {
    openModalExpense("modalExpenses");
  });
  modalIcons()
  
  /*GRAFICO PRINCIPAL*/
  principalGrapich(totalIncomesText, totalExpensesText, totalIncomesValue, totalExpensesValue, totalIncomesExpenses, incomePercent, expensePercent, totalBalance);
  /*TABLA*/
  dataTable();
});


function modalIcons(){
  const transactionIcons = document.querySelectorAll(".transactionIcon");
  transactionIcons.forEach((icon) => {
    const type = icon.dataset.type;
    icon.innerHTML = `<i class="fas ${iconMap[type] || "fa-question"
      }"></i>`;
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

async function monthlyFilter(month, year) {
  try {
    const ruta = "/date-filter/set-dates-by-month";
    const response = await fetch(ruta, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ month, year }),
    });

    if (!response.ok)
      throw new Error(
        "Network response was not ok " +
        response.statusText +
        "RUTA FETCH " +
        ruta
      );
    location.reload();
  } catch (error) {
    console.error(
      "There has been a problem with your fetch operation:",
      error
    );
  }
}

async function yearlyFilter(year) {

  try {
    const ruta = "/date-filter/set-dates-by-year";
    const response = await fetch(ruta, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ year }),
    });

    if (!response.ok)
      throw new Error(
        "Network response was not ok " +
        response.statusText +
        "RUTA FETCH " +
        ruta
      );
    location.reload();
  } catch (error) {
    console.error(
      "There has been a problem with your fetch operation:",
      error
    );
  }
}

async function filterByDates(dateFrom, dateTo) {
  try {
    const ruta = "/date-filter/set-dates-by-range";
    const response = await fetch(ruta, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dateFrom, dateTo }),
    });

    if (!response.ok)
      throw new Error(
        "Network response was not ok " +
        response.statusText +
        "RUTA FETCH " +
        ruta
      );
    location.reload();
  } catch (error) {
    console.error(
      "There has been a problem with your fetch operation:",
      error
    );
  }
}
function filterType() {
  const tipoFiltro = document.getElementById("tipo-filtro");
  const campoFechas = document.getElementById("campoFechas");
  const campoMensual = document.getElementById("campoMensual");
  const campoAnual = document.getElementById("campoAnual");

  const valorSeleccionado = tipoFiltro.value;

  // Mostrar/ocultar campos según la selección
  if (valorSeleccionado === "dates") {
    campoFechas.style.display = "flex";
    campoMensual.style.display = "none";
    campoAnual.style.display = "none";
  } else if (valorSeleccionado === "monthly") {
    campoFechas.style.display = "none";
    campoMensual.style.display = "flex";
    campoAnual.style.display = "none";
  } else if (valorSeleccionado === "yearly") {
    campoFechas.style.display = "none";
    campoMensual.style.display = "none";
    campoAnual.style.display = "flex";
  }
}