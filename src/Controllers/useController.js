import { v4 as uuid } from "uuid";

import httpStatus from "http-status";





class UseController {

  static async signup(req, res) {
    const newUser = await AuthService.userSignup(req);
    newUser.password='';
    const { password, ...data } = newUser;
    const token = TokenAuthenticator.tokenGenerator(data._doc);
    data.token = token;
  }
}
export default UseController;