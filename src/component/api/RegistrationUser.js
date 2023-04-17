import BaseApi from "./BaseApi";

export default class RegistrationUser extends BaseApi {
  static registrationUser(data) {
    return this.post('/user/register', data)
  }
}