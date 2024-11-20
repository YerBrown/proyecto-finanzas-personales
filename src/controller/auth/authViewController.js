import authController from "../auth/authController.js";

// Función para manejar el registro de un usuario.
async function register(req, res) {
    try {
        
        const { username, email, password, passwordConfirm } = req.body;

        
        const result = await authController.register(username, email, password, passwordConfirm);

       
        res.redirect("/login?message=usuario registrado correctamente&messageType=success");
    } catch (error) {
        console.error(error);

        
        const url = `/register?message=${error.message}&messageType=error`;
        res.redirect(url);
    }
}

// Función para mostrar el formulario de inicio de sesión.
function loginForm(req, res) {
    
    const { message, messageType } = req.query;

  
    res.render("user/login", { message, messageType });
}

// Función para mostrar el formulario de registro.
function registerForm(req, res) {
    
    const { message, messageType } = req.query;

    
    res.render("user/register", { message, messageType });
}

// Función para manejar el inicio de sesión de un usuario.
async function login(req, res) {
    try {
        
        const { email, password } = req.body;

        
        const user = await authController.login(email, password);

        
        req.session.user = {
            email: user.email,
            user_id: user.user_id,
            rol: user.rol,
        };

        
        const url = `/transaction?message=sesión iniciada correctamente&messageType=success`;
        res.redirect(url);
    } catch (error) {
        console.error(error);

       
        const url = `/login?message=${error.message}&messageType=error`;
        res.redirect(url);
    }
}

// Función para cerrar la sesión de un usuario.
function logout(req, res) {
   
    req.session.user = null;

    
    res.redirect("/");
}


export default {
    register,
    login,
    logout,
    loginForm,
    registerForm,
};
