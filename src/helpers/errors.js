class USER_NOT_FOUND extends Error{
    constructor(){
        super("Usuario no encontrado");
        this.status=404;
    }
}

class USER_ALREADY_EXIST extends Error {
    constructor(){
        super("El usuario ya existe");
        this.status=409;
    }

}

class EMAIL_ALREADY_EXIST extends Error {
    constructor(){
        super("El email ya esta en uso");
        this.status=409;
    }

}

class INVALID_CREDENTIALS extends Error{
    constructor(){
        super("Credenciales invalidas")
        this.status=400;
    }
}

class PASSWORD_DONT_MATCH extends Error{
    constructor(){
        super("la contraseña no coincide")
        this.status=400;
    }
}

export const error ={
    USER_NOT_FOUND,
    USER_ALREADY_EXIST,
    EMAIL_ALREADY_EXIST,
    INVALID_CREDENTIALS,
    PASSWORD_DONT_MATCH 
}

export default error;