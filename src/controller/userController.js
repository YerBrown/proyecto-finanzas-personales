import userModel from "../model/userModel.js";
import error from "../helpers/errors.js";
async function getAll() {
    const users = await userModel.findAll();
    return users;
}
async function getById(id) {
    const user = await userModel.findByPk(id);
    return user;
}

async function create(username, email, password) {
    const oldUser = await getByEmail(id);
    if (oldUser) {
        throw new error.EMAIL_ALREADY_EXISTS();
    }
    const newUser = await userModel.create({
        username,
        email,
        password,
    });

    return newUser;
}

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

async function deactivate(id) {
    const userToRemove = await userModel.findByPk(id);
    userToRemove.active = 0;
    userToRemove.save();
    return userToRemove;
}

export const functions = {
    getAll,
    getById,
    create,
    update,
    deactivate,
};
export default functions;
