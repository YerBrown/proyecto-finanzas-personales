class USER_NOT_FOUND extends Error {
    constructor() {
        super("Usuario no encontrado");
        this.status = 404;
    }
}

class USER_ALREADY_EXISTS extends Error {
    constructor() {
        super("El usuario ya existe");
        this.status = 409;
    }
}

class EMAIL_ALREADY_EXISTS extends Error {
    constructor() {
        super("El email ya está en uso");
        this.status = 409;
    }
}

class USERNAME_ALREADY_EXISTS extends Error {
    constructor() {
        super("El nombre de usuario ya está en uso");
        this.status = 409;
    }
}

class INVALID_CREDENTIALS extends Error {
    constructor() {
        super("Credenciales inválidas");
        this.status = 401;
    }
}

class EXPENSE_NOT_FOUND extends Error {
    constructor() {
        super("Gasto no encontrado");
        this.status = 404;
    }
}

class EXPENSE_NOT_CREATED extends Error {
    constructor() {
        super("Gasto no creado");
        this.status = 400;
    }
}
class INCOME_NOT_FOUND extends Error {
    constructor() {
        super("Ingreso no encontrado");
        this.status = 404;
    }
}
class CATEGORY_NOT_FOUND extends Error {
    constructor() {
        super("Categoría no encontrada");
        this.status = 404;
    }
}
export const errors = {
    USER_NOT_FOUND,
    USER_ALREADY_EXISTS,
    EMAIL_ALREADY_EXISTS,
    USERNAME_ALREADY_EXISTS,
    INVALID_CREDENTIALS,
    EXPENSE_NOT_FOUND,
    INCOME_NOT_FOUND,
    CATEGORY_NOT_FOUND,
};

export default errors;