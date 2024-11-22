import incomeController from "./incomeController.js";

// Obtiene todos los gastos
async function getAll(req, res) {
    try {
        const expenses = await incomeController.getAllIncomes();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los gastos" });
    }
}
export const functions = {
    getAll,
};

export default functions;
