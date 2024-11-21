import { openModal as openModalIncome } from "./incomeModal.js";
import { openModal as openModalExpense } from "./expenseModal.js";

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

export const iconMap = {
    Salario: "fa-building-columns",
    Transporte: "fa-bus",
    Compra: "fa-basket-shopping",
    Alquiler: "fa-house",
    Educación: "fa-graduation-cap",
    Comida: "fa-utensils",
    Entretenimiento: "fa-music",
    Salud: "fa-heartbeat",
    Viajes: "fa-plane",
    Ahorro: "fa-piggy-bank",
    Impuestos: "fa-file-invoice-dollar",
    Donaciones: "fa-hand-holding-heart",
    Renta: "fa-solid fa-house-chimney-user",
    Ocio: "fa-solid fa-champagne-glasses",
    "Suscripciones y Membresías": "fa-solid fa-tv",
};

export const colores = [
    { colorClaro: "#FF5733", colorOscuro: "#4C1A0D" }, // Naranja brillante y oscuro
    { colorClaro: "#FFC300", colorOscuro: "#665000" }, // Amarillo brillante y oscuro
    { colorClaro: "#DAF7A6", colorOscuro: "#4A6631" }, // Verde pastel y verde oscuro
    { colorClaro: "#FF33A6", colorOscuro: "#66004C" }, // Rosa brillante y oscuro
    { colorClaro: "#FF6F33", colorOscuro: "#662C0D" }, // Naranja intenso y oscuro
    { colorClaro: "#33FF76", colorOscuro: "#0D4C22" }, // Verde neón y oscuro
    { colorClaro: "#33C4FF", colorOscuro: "#124060" }, // Azul cielo y azul profundo
    { colorClaro: "#FFBD33", colorOscuro: "#664A0D" }, // Mostaza brillante y oscuro
    { colorClaro: "#FF9E33", colorOscuro: "#663D0D" }, // Naranja melocotón y oscuro
    { colorClaro: "#FF3333", colorOscuro: "#660D0D" }, // Rojo intenso y oscuro
    { colorClaro: "#33F0FF", colorOscuro: "#0D4D66" }, // Azul eléctrico y oscuro
    { colorClaro: "#33FFCC", colorOscuro: "#0D4C3A" }, // Turquesa claro y oscuro
    { colorClaro: "#FF33FF", colorOscuro: "#660D66" }, // Fucsia intenso y oscuro
    { colorClaro: "#FFC733", colorOscuro: "#66510D" }, // Oro brillante y oscuro
    { colorClaro: "#FF6FFF", colorOscuro: "#663166" }, // Rosa pastel y magenta oscuro
];

document.addEventListener("DOMContentLoaded", function () {
    // const filterType = sessionStorage.getItem('filterType');
    // console.log('FILTERTYPE ' + filterType); // 'value'
    // document.getElementById('tipo-filtro').setAttribute("selected", filterType);

    // const filters = document.querySelectorAll('#tipo-filtro option');
    // console.log("FILTROS",filters)
    // filters.forEach(filter => {
    //   if (filter.value === filterType) {
    //     filter.selected = true;
    //   }else {
    //     filter.selected = false;
    //   }
    // });

    filterType();
    const tipoFiltro = document.getElementById("tipo-filtro");
    tipoFiltro.addEventListener("change", function () {
        filterType();
    });
    // Controlar cambios en el input de fecha desde
    const fechaDesdeInput = document.getElementById("fechaDesde");
    dateFrom = fechaDesdeInput.value;
    fechaDesdeInput.addEventListener("change", function () {
        dateFrom = fechaDesdeInput.value;
    });

    // Controlar cambios en el input de fecha hasta
    const fechaHastaInput = document.getElementById("fechaHasta");
    dateTo = fechaHastaInput.value;
    fechaHastaInput.addEventListener("change", function () {
        dateTo = fechaHastaInput.value;
    });

    const buttonFilterDates = document.getElementById("buttonFilterDates");
    buttonFilterDates.addEventListener("click", () => {
        console.log("LLAMA AL BOTON");
        filterByDates(dateFrom, dateTo);
    });

    // Controlar cambios en el input de fecha mensual
    const fechaMensualInput = document.getElementById("fechaMensual");
    fechaMensualInput.addEventListener("change", function () {
        console.log("Fecha mensual:", fechaMensualInput.value);
        const year = fechaMensualInput.value.split("-")[0];
        const month = fechaMensualInput.value.split("-")[1];
        monthlyFilter(month, year);
    });

    const fechaAnualInput = document.getElementById("fechaAnual");
    fechaAnualInput.addEventListener("change", function () {
        console.log("Fecha mensual:", fechaAnualInput.value);
        const year = fechaAnualInput.value.split("-")[0];
        yearlyFilter(year);
    });

    // Controlar cambios en el select de año
    //  const fechaAnualSelect = document.getElementById('fechaAnual');
    //  fechaAnualSelect.addEventListener("change", function () {
    //    console.log("Año seleccionado:", fechaAnualSelect.value);
    //  });

    const closeModalIncomes = document.getElementById("modal-close-income");
    const closeModalExpenses = document.getElementById("modal-close-expense");

    closeModalIncomes.addEventListener("click", () => {
        closeModal("modalIncomes");
    });

    closeModalExpenses.addEventListener("click", () => {
        closeModal("modalExpenses");
    });

    const buttonIncomes = document.getElementById("totalIncomes");
    const buttonExpenses = document.getElementById("totalExpenses");

    buttonIncomes.addEventListener("click", () => {
        openModalIncome("modalIncomes");
    });

    buttonExpenses.addEventListener("click", () => {
        console.log("ENTRA BOTON");
        openModalExpense("modalExpenses");
    });

    const transactionIcons = document.querySelectorAll(".transactionIcon");
    transactionIcons.forEach((icon) => {
        const type = icon.dataset.type;
        icon.innerHTML = `<i class="fas ${
            iconMap[type] || "fa-question"
        }"></i>`;
    });
    var ctx = document.getElementById("myPieChart").getContext("2d");
    totalIncomesText = document.getElementById("totalIncomes").innerText;
    totalExpensesText = document.getElementById("totalExpenses").innerText;
    totalIncomesValue = Math.abs(
        Number(totalIncomesText.replace(/[^0-9.-]/g, ""))
    );
    totalExpensesValue = Math.abs(
        Number(totalExpensesText.replace(/[^0-9.-]/g, ""))
    );
    totalIncomesExpenses = totalIncomesValue + totalExpensesValue;
    incomePercent = Math.floor(
        (totalIncomesValue / totalIncomesExpenses) * 100
    );
    expensePercent = Math.floor(
        (totalExpensesValue / totalIncomesExpenses) * 100
    );
    totalBalance = totalIncomesValue - totalExpensesValue;

    var myPieChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            datasets: [
                {
                    data: [expensePercent, incomePercent],
                    backgroundColor: ["#ff0000", "#2ea01d"],
                    hoverOffset: 40,
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            responsive: false,
            cutout: "65%",
            radius: "80%",
            plugins: {
                legend: {
                    position: "top",
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            const labels = ["Gastos", "Ingresos"];
                            const value = tooltipItem.raw;
                            return `${
                                labels[tooltipItem.dataIndex]
                            }: ${value}%`;
                        },
                    },
                },
            },
        },
        plugins: [
            {
                id: "centerTextPrincipal",
                beforeDraw: function (chart) {
                    const ctx = chart.ctx;
                    const text = "Total: " + totalBalance + " €";
                    ctx.restore();
                    ctx.font = "italic bold 15px Arial";
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    ctx.fillStyle = totalBalance > 0 ? "#40dd28" : "#ff0000";
                    const centerX =
                        (chart.chartArea.left + chart.chartArea.right) / 2;
                    const centerY =
                        (chart.chartArea.top + chart.chartArea.bottom) / 2;
                    ctx.fillText(text, centerX, centerY);
                    ctx.save();
                },
            },
        ],
    });
});

/*DATATABLE*/
document.addEventListener("DOMContentLoaded", function () {
    var table = document.getElementById("tabla-registros");

    var dataTable = new DataTable(table, {
        paging: true,
        ordering: true,
        info: false,
        searching: true,
        lengthChange: false,
        language: {
            url: "https://cdn.datatables.net/plug-ins/2.1.8/i18n/es-ES.json",
        },
        drawCallback: function (settings) {
            var rows = table.querySelectorAll("tbody tr");
            rows.forEach(function (row) {
                row.style.backgroundColor = "#1E1E1E";
            });

            var info = document.querySelector(".dataTables_info");
            if (info) {
                info.style.color = "#ff6347";
            }
        },
    });
});

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

async function monthlyFilter(month, year) {
    console.log("LLEGA 0");

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
        console.log("LLEGA 5");
        location.reload();
    } catch (error) {
        console.error(
            "There has been a problem with your fetch operation:",
            error
        );
    }
}

async function yearlyFilter(year) {
    console.log("LLEGA 0");

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
    console.log("LLEGA FILTER BY DATES");

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
