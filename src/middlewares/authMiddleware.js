import jwt from "../config/jwt.js";

async function isAuthenticated(req, res, next) {
    console.log("headers", req.headers);
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ error: "jwt token needed" });
    }
    const token = authorization.split("Bearer ", "");
    const verified = jwt.verify(token);
    console.log("token", token);
    if (!verified) {
        return res.status(401).json({ error: "jwt token not correct" });
    }
    console.log(verified);
    next();
}

async function isAdmin(req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ error: "jwt token needed" });
    }
    const token = authorization.split("Bearer ", "");
    const verified = jwt.verify(token);
    console.log("token", token);
    if (!verified) {
        return res.status(401).json({ error: "jwt token not correct" });
    }
    console.log(verified);
    next();
}

export { isAuthenticated };
