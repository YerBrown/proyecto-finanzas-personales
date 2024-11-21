export function principalGrapich(
    totalIncomesText,
    totalExpensesText,
    totalIncomesValue,
    totalExpensesValue,
    totalIncomesExpenses,
    incomePercent,
    expensePercent,
    totalBalance
) {
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
                    const text = "Total: " + totalBalance + "€";
                    ctx.restore();
                    ctx.font = "italic bold 15px Arial";
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    ctx.fillStyle = totalBalance > 0 ? "#2ea01d" : "#ff0000";
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
}
