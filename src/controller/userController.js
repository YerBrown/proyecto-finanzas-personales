import userModel from '../model/userModel.js'

async function getAll() {
    const users = await userModel.findAll
    return users;
}
async function getById(id) {
    const user = await userModel.findByPk(id);
    return user;
}

async function create(username, email, tel, rol,password,create_time) {
    const newUser = await userModel.create({
        username,
        email,
        tel,
        rol,
        password,
        create_time,
    });

    return newUser;
}


async function update(username, email, tel, rol,password) {
    const user = await userModel.findByPk(id);
    user.username = username;
    user.email = email;
    user.tel = tel;
    user.rol = rol;
    user.password = password;

    return user;
}

async function remove(id) {
    const userToRemove = await userModel.findByPk(id);
    await userToRemove.destroy();
    return userToRemove;
}


export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}
export default functions;

