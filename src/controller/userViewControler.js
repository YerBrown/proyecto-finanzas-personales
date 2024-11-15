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

async function createForm(req, res) {
    res.render("user/list")
}

async function updateForm(req, res) {
    const id = parseInt(req.params.id);
    const user = await userController.getById(id);
    res.render("user/list", { user })
}

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

async function remove(req, res) {
    const id = parseInt(req.params.id);
    await userController.remove(id);
    res.redirect("/user");
}


export const functions = {
    getAll,
    getById,
    create,
    createForm,
    updateForm,
    update,
    remove
}
export default functions;
