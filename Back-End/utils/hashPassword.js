import bcrypt from "bcrypt"

export async function hashPassword(password) {
    const saltRound = await bcrypt.genSalt(11)// generate salt
    const hashPass = await bcrypt.hash(password, saltRound)// generate hash password
    return hashPass;
}



