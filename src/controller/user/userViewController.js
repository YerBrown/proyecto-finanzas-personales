import userController from "./userController.js";

// Obtiene todos los usuarios y los pasa a una vista
async function getAll(req, res) {
    const users = await userController.getAll();
    res.render("user/userAdministrator", { users });
}

// Obtiene un usuario por su ID y lo pasa a una vista
async function getById(req, res) {
    const id = parseInt(req.params.id);
    const user = await userController.getById(id);
    res.render("user/list", { user });
}

// Crea un nuevo usuario con los datos del cuerpo de la solicitud
async function create(req, res) {
    const { username, email, rol, password } = req.body;
    await userController.create(username, email, rol, password);
    res.redirect("/user");
}

// Actualiza los datos de un usuario existente con los datos del cuerpo de la solicitud
async function update(req, res) {
    const { username, email, rol, password } = req.body;
    const id = parseInt(req.params.id);
    await userController.update(id, username, email, rol, password);
    res.redirect("/user/" + id);
}

// Desactiva a un usuario identificado por su ID
async function deactivate(req, res) {
    const id = parseInt(req.params.id);
    await userController.deactivate(id);
    res.redirect("/user");
}

export const functions = {
    getAll,
    getById,
    create,
    update,
    deactivate,
};
export default functions;
