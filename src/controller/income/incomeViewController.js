import incomeController from "./incomeController.js";
import incomeTypeController from "./incomeTypeController.js";

// Maneja los errores y responde con un estado 500 y el mensaje del error
function handleError(res, error) {
    console.error(error);
    if (error.status) {
        res.status(error.status);
    } else {
        res.status(500);
    }
    res.json({ error: error.message });
}

// Obtiene todos los ingresos
async function getAll(req, res) {
    try {
        const incomes = await incomeController.getAll(
            res.locals.user.id,
            req.session.startDate,
            req.session.endDate
        );
        res.status(200).json(incomes);
    } catch (error) {
        handleError(res, error);
    }
}

// Obtiene un ingreso por su ID
async function getById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const income = await incomeController.getById(id);

        if (!income) {
            return res.status(404).json({ error: "Ingreso no encontrado" });
        }

        res.status(200).json(income);
    } catch (error) {
        handleError(res, error);
    }
}

// Obtiene todos los ingresos de un usuario por su ID
async function getAllByUserId(req, res) {
    try {
        const user_id = req.params.user_id;
        const income = await incomeController.getAllByUserId(user_id);

        if (!income) {
            return res.status(404).json({
                error: "No se encontraron ingresos para este usuario",
            });
        }

        res.status(200).json(income);
    } catch (error) {
        handleError(res, error);
    }
}

// Obtiene todos los gastos de un usuario específico
async function getIncomeCountByType(req, res) {
    try {
        const user_id = res.locals.user.id;
        const startDate = req.session.startDate;
        const endDate = req.session.endDate;

        if (!startDate || !endDate) {
            return res
                .status(400)
                .json({ error: "Las fechas no están definidas en la sesión" });
        }
        const { incomeCounts, totalAmountIncomes } =
            await incomeController.getIncomeCountByType(
                user_id,
                startDate,
                endDate
            );

        if (!incomeCounts || incomeCounts.length === 0) {
            return res
                .status(404)
                .json("No se encontraron ingresos para este usuario");
        }

        res.status(200).json({ incomeCounts, totalAmountIncomes });
    } catch (error) {
        handleError(res, error);
    }
}

// Muestra el formulario para crear un nuevo ingreso
async function createForm(req, res) {
    try {
        const types = await incomeTypeController.getAll();
        const isAdmin = req.session.user.rol == "admin";
        res.render("income/createIncomeForm", { types, isAdmin });
    } catch (error) {
        handleError(res, error);
    }
}

// Crea un nuevo ingreso
async function create(req, res) {
    try {
        let { amount, title, comment, datetime, type_id } = req.body;
        const user_id = res.locals.user.id;
        const newIncome = await incomeController.create(
            amount,
            title,
            comment,
            datetime,
            type_id,
            user_id
        );

        res.redirect("/transaction");
    } catch (error) {
        handleError(res, error);
    }
}

// Muestra el formulario de edición de un ingreso específico con los tipos de gastos
async function updateForm(req, res) {
    try {
        const id = parseInt(req.params.id);
        const types = await incomeTypeController.getAll();
        const currentIncome = await incomeController.getById(id);

        if (!currentIncome) {
            return res.status(404).json("Ingreso no encontrado");
        }

        currentIncome.amount = Math.abs(currentIncome.amount / 100);
        const isAdmin = req.session.user.rol == "admin";
        res.render("income/editIncomeForm", {
            types,
            currentIncome: currentIncome,
            isAdmin,
        });
    } catch (error) {
        handleError(res, error);
    }
}

// Actualiza un ingreso por su ID
async function update(req, res) {
    try {
        const { id } = req.params;
        const { amount, title, comment, datetime, type_id, user_id } = req.body;

        const income = await incomeController.update(
            id,
            amount,
            title,
            comment,
            datetime,
            type_id,
            user_id
        );

        res.redirect("/transaction");
    } catch (error) {
        handleError(res, error);
    }
}

// Elimina un ingreso por su ID
async function remove(req, res) {
    try {
        const { id } = req.params;
        const income = await incomeController.remove(id);
        res.redirect("/transaction");
    } catch (error) {
        handleError(res, error);
    }
}

export const functions = {
    getAll,
    getById,
    createForm,
    getAllByUserId,
    getIncomeCountByType,
    updateForm,
    update,
    create,
    remove,
};

export default functions;
