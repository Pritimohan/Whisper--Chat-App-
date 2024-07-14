import bcrypt from 'bcrypt';

export async function checkPassword(password, hashPassword) {
    try {
        // compare password with hashPassword
        const match = await bcrypt.compare(password, hashPassword ? hashPassword : "");
        return match

    } catch (error) {
        return error
    }
}