import expenseTypeModel from "../../model/expenseTypeModel.js";

// Obtener todos los tipos de gastos
async function getAll() {
    const expenseTypes = await expenseTypeModel.findAll();
    return expenseTypes;
}

// Obtener un tipo de gasto por su ID
async function getById(id) {
    const expenseType = await expenseTypeModel.findByPk(id);
    return expenseType;
}

// Crear un nuevo tipo de gasto
async function create(name) {
    const newExpenseType = await expenseTypeModel.create({
        name,
    });
    return newExpenseType;
}

// Eliminar un tipo de gasto por su ID
async function remove(id) {
    const expenseTypeToRemove = await expenseTypeModel.findByPk(id);
    await expenseTypeToRemove.destroy();
    return expenseTypeToRemove;
}

export const functions = {
    getAll,
    getById,
    create,
    remove,
};
export default functions;
