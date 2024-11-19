import userModel from "../../model/userModel.js";
import errors from "../../helpers/errors.js";
import { hashPasword } from "../../config/bcrypt.js";
// Obtiene todos los usuarios
async function getAll() {
    const users = await userModel.findAll();
    return users;
}

// Obtiene un usuario por su ID
async function getById(id) {
    const user = await userModel.findByPk(id);

    // Comprobar si ha encontrado el usuario
    if (!user) {
        console.error("Usuario no encontrado");
        return null;
    }

    return user;
}

// Obtiene un usuario por su email
async function getByEmail(email) {
    const user = await userModel.findOne({
        where: { email: email },
    });

    // Comprobar si ha encontrado el usuario
    if (!user) {
        console.error("Usuario no encontrado");
        return null;
    }

    return user;
}

// Crea un nuevo usuario con los detalles proporcionados
async function create(username, email, password) {
    const oldUser = await getByEmail(email);
    if(oldUser){
        throw new errors.EMAIL_ALREADY_EXISTS();
    }
    const hash = await hashPasword(password);

    const newUser = await userModel.create({
        username,
        email,
        password:hash,
    });
    return newUser;
}

// Actualiza un usuario existente con los detalles proporcionados
async function update(id, username, email, password, rol) {
    const user = await userModel.findByPk(id);
    if (!user){
        throw new errors.USER_NOT_FOUND();
    }

    // Comprobar si ha encontrado el usuario
    if (!user) {
        console.error("Usuario no encontrado");
        return null;
    }
user.username = username;
user.email=email;
if(password){
    const hash = await hashPasword(password);
    user.password=hash;
}
   await user.save();
    return user;
}

// Desactiva un usuario por su ID (establece active a 0)
async function deactivate(id) {
    const user = await userModel.findByPk(id);
    if (!user){
        throw new errors.USER_NOT_FOUND();
    }
    
    await user.update({ active: 0 });
    return user;
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
