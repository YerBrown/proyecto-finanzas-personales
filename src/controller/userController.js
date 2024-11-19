import userModel from '../model/userModel.js'
import error from '../helpers/error.js';
async function getAll() {
    const users = await userModel.findAll()
    return users;
}
async function getById(id) {
    const user = await userModel.findByPk(id);
    return user;
}

async function create(username, email, rol,password) {
    const oldUser = await getByEmail(id);
    if(oldUser){
        throw new error.EMAIL_ALREADY_EXIST();
    }
    const newUser = await userModel.create({
        username,
        email,
        rol,
        password,
          
    });

    return newUser;
}


async function update(id, username, email, rol,password=null) {
    const user = await userModel.findByPk(id);

    user.username = username;
    user.email = email;
    user.rol = rol;
    if (password) {user.password=password}
   
    await user.save();
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

