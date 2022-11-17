import bcrypt from "bcryptjs";

class PasswordUtil {

    hashPassword = (password) => {
        const salt = bcrypt.genSaltSync(6);
        const hashed = bcrypt.hashSync(password, salt);
        return hashed;
    }

    validatePassword = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
        return password.match(regex);
    }
}

export default new PasswordUtil();