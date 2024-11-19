import incomeTypeModel from "../../model/incomeTypeModel.js";

// Obtiene todos los tipos de ingresos
async function getAll() {
    const incomeTypes = await incomeTypeModel.findAll();
    return incomeTypes;
}

// Obtiene un tipo de ingreso por su ID
async function getById(id) {
    const incomeType = await incomeTypeModel.findByPk(id);
    return incomeType;
}

// Crea un nuevo tipo de ingreso
async function create(name) {
    const newIncomeType = await incomeTypeModel.create({
        name,
    });
    return newIncomeType;
}

// Elimina un tipo de ingreso por su ID
async function remove(id) {
    const incomeTypeToRemove = await incomeTypeModel.findByPk(id);
    await incomeTypeToRemove.destroy();
    return incomeTypeToRemove;
}

export const functions = {
    getAll,
    getById,
    create,
    remove,
};
export default functions;
