export function dataTable(){
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
}