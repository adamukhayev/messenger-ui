import {instance} from "./authInstance";

export default class BaseApi {

  static post(urlPath, data) {
    return instance.post(urlPath, data);
  }
}
