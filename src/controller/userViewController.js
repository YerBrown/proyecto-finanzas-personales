import userController from "./userController.js";

async function getAll(req, res) {
    const users = await userController.getAll();

    res.render("user/userAdministrator", { users });
}

async function getById(req, res) {
    const id = parseInt(req.params.id);
    const user = await userController.getById(id);
    res.render("user/list", { user });
}
//Cambiar createForm por register
/*async function createForm(req, res) {
    res.render("user/list")
}*/

async function create(req, res) {
    const { username, email, rol, password } = req.body;
    await userController.create(username, email, rol, password);
    res.redirect("/user");
}

async function update(req, res) {
    const { username, email, rol, password } = req.body;
    const id = parseInt(req.params.id);
    await userController.update(id, username, email, rol, password);
    res.redirect("/user/" + id);
}

async function deactivate(req, res) {
    const id = parseInt(req.params.id);
    await userController.deactivate(id);
    res.redirect("/user");
}

async function registerForm(req, res) {
    res.render("user/register");
}
async function loginForm(req, res) {
    res.render("user/login");
}

export const functions = {
    getAll,
    getById,
    create,
    update,
    registerForm,
    loginForm,
    deactivate,
};
export default functions;
