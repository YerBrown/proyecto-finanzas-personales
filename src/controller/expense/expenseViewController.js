import expenseController from "./expenseController.js";
import expenseTypeController from "./expenseTypeController.js";

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

// Obtiene todos los gastos
async function getAll(req, res) {
    try {
        console.log("startDate", req.session.startDate);
        const expenses = await expenseController.getAll(
            res.locals.user.id,
            req.session.startDate,
            req.session.endDate
        );
        res.status(200).json(expenses);
    } catch (error) {
        handleError(res, error);
    }
}

// Obtiene un gasto específico por su ID
async function getById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const expense = await expenseController.getById(id);

        res.status(200).json(expense);
    } catch (error) {
        handleError(res, error);
    }
}

// Obtiene todos los gastos de un usuario específico
async function getAllByUserId(req, res) {
    try {
        const startDate = req.session.startDate;
        const endDate = req.session.endDate;

        if (!startDate || !endDate) {
            return res
                .status(400)
                .json({ error: "Las fechas no están definidas en la sesión" });
        }

        const user_id = parseInt(req.params.user_id);
        const expenses = await expenseController.getAllByUserId(
            user_id,
            startDate,
            endDate
        );

        if (!expenses || expenses.length === 0) {
            return res
                .status(404)
                .json("No se encontraron gastos para este usuario");
        }

        res.status(200).json(expenses);
    } catch (error) {
        handleError(res, error);
    }
}

// Obtiene todos los gastos de un usuario específico
async function getExpenseCountByType(req, res) {
    try {
        // const startDate = req.session.startDate;
        // const endDate = req.session.endDate;

        const user_id = res.locals.user.id;
        const startDate = "2024-11-01";
        const endDate = "2024-11-29";
        console.log("LLEGA 1");
        if (!startDate || !endDate) {
            return res
                .status(400)
                .json({ error: "Las fechas no están definidas en la sesión" });
        }

        //const user_id = parseInt(req.params.user_id);
        const { expenseCounts, totalAmountExpenses } =
            await expenseController.getExpenseCountByType(
                user_id,
                startDate,
                endDate
            );

        if (!expenseCounts || expenseCounts.length === 0) {
            return res
                .status(404)
                .json("No se encontraron gastos para este usuario");
        }

        res.status(200).json({ expenseCounts, totalAmountExpenses });
        console.log("llega 2");
    } catch (error) {
        handleError(res, error);
    }
}

// Muestra el formulario de creación de un gasto con los tipos de gastos disponibles
async function createForm(req, res) {
    try {
        const types = await expenseTypeController.getAll();
        res.render("expense/createExpenseForm", { types });
    } catch (error) {
        handleError(res, error);
    }
}

// Crea un nuevo gasto
async function create(req, res) {
    try {
        const { amount, title, comment, datetime, type_id } = req.body;
        const user_id = res.locals.user.id;

        const newExpense = await expenseController.create(
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

// Muestra el formulario de edición de un gasto específico con los tipos de gastos
async function updateForm(req, res) {
    try {
        const id = parseInt(req.params.id);
        const types = await expenseTypeController.getAll();
        const currentExpense = await expenseController.getById(id);

        if (!currentExpense) {
            return res.status(404).json("Gasto no encontrado");
        }

        currentExpense.amount = Math.abs(currentExpense.amount / 100);
        res.render("expense/editExpenseForm", { types, currentExpense });
    } catch (error) {
        handleError(res, error);
    }
}

// Actualiza un gasto específico
async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const { amount, title, comment, datetime, type_id, user_id } = req.body;

        const updatedExpense = await expenseController.update(
            id,
            amount,
            title,
            comment,
            datetime,
            type_id,
            user_id
        );

        res.status(200).json(updatedExpense);
    } catch (error) {
        handleError(res, error);
    }
}

// Elimina un gasto específico
async function remove(req, res) {
    try {
        const id = parseInt(req.params.id);
        await expenseController.remove(id);
        res.status(200).json({ message: "Gasto eliminado correctamente" });
    } catch (error) {
        handleError(res, error);
    }
}

export const functions = {
    getAll,
    getById,
    getAllByUserId,
    getExpenseCountByType,
    create,
    update,
    remove,
    createForm,
    updateForm,
};

export default functions;
