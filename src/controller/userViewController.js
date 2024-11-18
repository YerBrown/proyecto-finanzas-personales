import userController from "./userController.js";

async function getAll(req, res) {
    const users = userController.getAll();
    res.render("/user/list", { users })
}

async function getById(req, res) {
    const id = parseInt(req.params.id);
    const user = await userController.getById(id);
    res.render("user/list", { user })
}
//Cambiar por createForm por register
/*async function createForm(req, res) {
    res.render("user/list")
}*/



async function create(req, res) {
    const { name, last_name, email, tel, rol } = req.body;
    await userController.create(name, last_name, email, tel, rol)
    res.redirect("user/list");
}

async function update(req, res) {
    const { name, last_name, email, tel, rol } = req.body;
    const id = parseInt(req.params.id);
    await userController.update(id,user_name, email, tel, rol );
    res.redirect("/user/" + id);
}
//Cambiar por desactivar
/*async function remove(req, res) {
    const id = parseInt(req.params.id);
    await userController.remove(id);
    res.redirect("/user");
}*/

async function registerForm (req, res) {
    res.render("user/register");
    
}
async function loginForm (req, res) {
    res.render("user/login");
    
}

export const functions = {
    getAll,
    getById,
    create,
    update,
    registerForm,
    loginForm
}
export default functions;
