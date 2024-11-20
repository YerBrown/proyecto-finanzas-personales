import Income from "../../model/incomeModel.js";
import incomeModel from "../../model/incomeModel.js";
import incomeTypeModel from "../../model/incomeTypeModel.js";
import sequelize, { Op } from "sequelize";
import errors from "../../helpers/errors.js";
// Obtiene todos los ingresos, incluyendo el nombre del tipo de ingreso
async function getAll(user_id, startDate, endDate) {
    const incomes = await incomeModel.findAll({
        include: {
            model: incomeTypeModel,
            attributes: ["name"],
        },
        where: {
            user_id: user_id, // Filtra los ingresos del usuario
            datetime: {
                [Op.between]: [startDate, endDate], // Filtra los gastos entre las fechas
            },
        },
    });
    return incomes;
}

// Obtiene un ingreso por su ID
async function getById(id) {
    const income = await incomeModel.findByPk(id, {
        include: {
            model: incomeTypeModel,
            attributes: ["name"],
        },
    });
    if (!income) {
        throw new errors.INCOME_NOT_FOUND();
    }
    return income;
}

// Obtiene todos los ingresos asociados a un usuario específico
async function getAllByUserId(user_id, startDate, endDate) {
    const incomes = await incomeModel.findAll({
        include: {
            model: incomeTypeModel,
            attributes: ["name"],
        },
        where: {
            user_id: user_id,
            datetime: {
                [Op.between]: [startDate, endDate], // Filtra los gastos entre las fechas
            },
        },
    });
    return incomes;
}

// Función para obtener la cantidad de ingresos por cada tipo de ingreso
async function getIncomeCountByType(user_id, startDate, endDate) {
    const incomeCounts = await Income.findAll({
        attributes: [
            "type_id",
            [sequelize.fn("SUM", sequelize.col("amount")), "totalAmount"], // Alias: totalAmount
        ],
        group: ["type_id"],
        include: {
            model: incomeTypeModel,
            attributes: ["name"], // Incluye el nombre del tipo de ingreso
        },
        where: {
            user_id,
            datetime: {
                [Op.between]: [startDate, endDate], // Filtra los ingresos entre las fechas
            },
        },
    });

    let totalAmountIncomes = 0;

    incomeCounts.forEach((income) => {
        // Accede al alias "totalAmount"
        const totalAmount = Number(income.get("totalAmount"));

        totalAmountIncomes += totalAmount / 100;
    });

    return { incomeCounts, totalAmountIncomes };
}

// Crea un nuevo ingreso con los detalles proporcionados
async function create(amount, title, comment, datetime, type_id, user_id) {
    const newIncome = await incomeModel.create({
        amount: Math.abs(amount * 100), // Transforma la cantidad de euros a centimos y asegura que la cantidad sea negativa
        title,
        comment,
        datetime,
        type_id,
        user_id,
    });
    return newIncome;
}

// Actualiza un ingreso existente con los detalles proporcionados
async function update(id, amount, title, comment, datetime, type_id, user_id) {
    const income = await incomeModel.findByPk(id);

    // Comprobar si ha encontrado el gasto
    if (!income) {
        throw new errors.INCOME_NOT_FOUND();
    }

    await income.update({
        amount: Math.abs(amount * 100), // Transforma la cantidad de euros a centimos y asegura que la cantidad sea positiva
        title,
        comment,
        datetime,
        type_id,
        user_id,
    });
    return income;
}

// Elimina un ingreso por su ID
async function remove(id) {
    const income = await incomeModel.findByPk(id);

    // Comprobar si ha encontrado el ingreso
    if (!income) {
        throw new errors.INCOME_NOT_FOUND();
    }

    await income.destroy();
    return income;
}

export const functions = {
    getAll,
    getById,
    getAllByUserId,
    getIncomeCountByType,
    create,
    update,
    remove,
};

export default functions;
