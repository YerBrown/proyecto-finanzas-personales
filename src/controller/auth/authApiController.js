
import authController from "./authController.js";

// Función para registrar un usuario.
async function register(req, res) {
    try {

        const { username, email, password, confirmPassword, rol } = req.body;


        const result = await authController.register(
            username,
            email,
            password,
            confirmPassword,
            rol
        );


        if (result.error) {
            return res.status(result.status).json({ error });
        }


        res.json(result);
    } catch (error) {

        console.error(error);
        res.status(500).json(error.message);
    }
}

// Funcion para iniciar sesión de un usuario.
async function login(req, res) {
    try {

        const { email, password } = req.body;


        const result = authController.login(email, password);


        if (result.error) {
            return res.status(result.status).json({ error });
        }


    } catch (error) {

        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}


export default {
    register,
    login,
};
