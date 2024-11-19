import bcrypt from "bcryptjs";

async function hashPasword(password) {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}

async function verifyPassword(password, hash) {
    const match = await bcrypt.compare(password, hash);
    return match;
}
export{
    hashPasword,
    verifyPassword
}