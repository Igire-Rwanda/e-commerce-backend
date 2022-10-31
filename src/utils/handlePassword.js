import bcrypt from "bcrypt";
import dotenv from 'dotenv';

dotenv.config({ path: "../../" })

class Password {
  //return cypfertext of password
  static encryptPassword(pswd) {
    console.log(process.env.SALT)
    return bcrypt.hashSync(pswd, parseInt(process.env.SALT));
  }

  //return if password is matching

  static checkPassword(hashedPswd,normalPswd) {
    return bcrypt.compareSync(normalPswd,hashedPswd)
  }
}


export default Password;
