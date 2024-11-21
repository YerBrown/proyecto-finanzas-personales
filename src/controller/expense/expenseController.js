import sequelize from "../../config/sequelize.js";
import { Op } from "sequelize";
import expenseModel from "../../model/expenseModel.js";
import expenseTypeModel from "../../model/expenseTypeModel.js";
import errors from "../../helpers/errors.js";
// Obtiene todos los gastos, incluyendo el nombre del tipo de gasto
async function getAll(user_id, startDate, endDate) {
    const expenses = await expenseModel.findAll({
        include: {
            model: expenseTypeModel,
            attributes: ["name"],
        },
        where: {
            user_id: user_id, // Filtra los gastos del usuario
            datetime: {
                [Op.between]: [startDate, endDate], // Filtra los gastos entre las fechas
            },
        },
    });
    return expenses;
}

// Obtiene un gasto por su ID
async function getById(id) {
    const expense = await expenseModel.findByPk(id, {
        include: {
            model: expenseTypeModel,
            attributes: ["name"],
        },
    });
    if (!expense) {
        throw new errors.EXPENSE_NOT_FOUND();
    }
    return expense;
}

// Obtiene todos los gastos asociados a un usuario específico
async function getAllByUserId(user_id, startDate, endDate) {
    const expenses = await expenseModel.findAll({
        include: {
            model: expenseTypeModel,
            attributes: ["name"],
        },
        where: {
            user_id: user_id,
            datetime: {
                [Op.between]: [startDate, endDate], // Filtra los gastos entre las fechas
            },
        },
    });
    return expenses;
}

// Función para obtener la cantidad de gastos por cada tipo de gasto
async function getExpenseCountByType(user_id, startDate, endDate) {
    const expenseCounts = await expenseModel.findAll({
        attributes: [
            "type_id",
            [sequelize.fn("SUM", sequelize.col("amount")), "totalAmount"],
        ],
        group: ["type_id"],
        include: {
            model: expenseTypeModel,
            attributes: ["name"], // Incluye el nombre del tipo de gasto
        },
        where: {
            user_id,
            datetime: {
                [Op.between]: [startDate, endDate], // Filtra los gastos entre las fechas
            },
        },
    });

    let totalAmountExpenses = 0;

    expenseCounts.forEach((expense) => {
        // Accede al alias "totalAmount"
        const totalAmount = Number(expense.get("totalAmount"));

        totalAmountExpenses += totalAmount / 100;
    });
    return { expenseCounts, totalAmountExpenses };
}

// Crea un nuevo gasto con los detalles proporcionados
async function create(amount, title, comment, datetime, type_id, user_id) {
    const newExpense = await expenseModel.create({
        amount: -Math.abs(amount * 100),
        title,
        comment,
        datetime,
        type_id,
        user_id,
    });
    return newExpense;
}

// Actualiza un gasto existente con los detalles proporcionados
async function update(id, amount, title, comment, datetime, type_id, user_id) {
    const expense = await expenseModel.findByPk(id);

    // Comprobar si ha encontrado el gasto
    if (!expense) {
        throw new errors.EXPENSE_NOT_FOUND();
    }

    await expense.update({
        amount: -Math.abs(amount * 100), // Transforma la cantidad de euros a centimos y asegura que la cantidad sea negativa
        title,
        comment,
        datetime,
        type_id,
        user_id,
    });
    return expense;
}

// Elimina un gasto por su ID
async function remove(id) {
    const expense = await expenseModel.findByPk(id);

    // Comprobar si ha encontrado el gasto
    if (!expense) {
        throw new errors.EXPENSE_NOT_FOUND();
    }

    await expense.destroy();
    return expense;
}
export const functions = {
    getAll,
    getById,
    getAllByUserId,
    getExpenseCountByType,
    create,
    update,
    remove,
};

export default functions;
