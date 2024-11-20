import userModel from "../../model/userModel.js";
import error from "../../helpers/errors.js";
import { hashPassword } from "../../config/bcrypt.js";

// Función para obtener todos los usuarios
async function getAll() {
    const users = await userModel.findAll();
    return users;
}

// Función para obtener un usuario por su ID
async function getById(id) {
    const user = await userModel.findByPk(id);
    return user;
}

// Función para obtener un usuario por su email
async function getByEmail(email) {
    const user = await userModel.findOne({ where: { email } });
    return user;
}

// Función para crear un nuevo usuario
async function create(username, email, password) {
    const oldUser = await getByEmail(email);
    if (oldUser) {
        throw new error.EMAIL_ALREADY_EXISTS();
    }
    const hash = await hashPassword(password);
    const newUser = await userModel.create({
        username,
        email,
        password: hash,
    });

    return newUser;
}

// Función para actualizar un usuario existente
async function update(id, username, email, rol, password = null) {
    const user = await userModel.findByPk(id);

    user.username = username;
    user.email = email;
    user.rol = rol;
    if (password) {
        user.password = password;
    }

    await user.save();
    return user;
}

// Función para desactivar un usuario
async function deactivate(id) {
    const userToRemove = await userModel.findByPk(id);
    userToRemove.active = 0;
    userToRemove.save();
    return userToRemove;
}

export const functions = {
    getAll,
    getById,
    getByEmail,
    create,
    update,
    deactivate,
};
export default functions;
