import userController from "./userController.js";

// Función para obtener todos los usuarios.
async function getAll(req, res) {
   
    const users = await userController.getAll();
    res.json(users);
}

// Función para obtener un usuario por su ID.
async function getById(req, res) {
    
    const id = parseInt(req.params.id);

    
    const user = await userController.getById(id);

    
    res.render("user/list", { user });
}

// Función para crear un nuevo usuario.
async function create(req, res) {
    
    const { username, email, rol, password } = req.body;

    
    await userController.create(username, email, rol, password);

    
    res.redirect("/user");
}

// Función para actualizar un usuario existente.
async function update(req, res) {
    
    const { username, email, rol, password } = req.body;

    
    const id = parseInt(req.params.id);

    
    await userController.update(id, username, email, rol, password);

    
    res.redirect("/user/" + id);
}


// Hay que adaptar esto para desactivar usuarios en lugar de eliminarlos.
/*async function remove(req, res) {
    const id = parseInt(req.params.id);
    await userController.remove(id);
    res.redirect("/user");
}*/

// Función para mostrar el formulario de registro de usuarios.
async function registerForm(req, res) {
    res.render("user/register");
}

// Función para mostrar el formulario de inicio de sesión de usuarios.
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
};


export default functions;
