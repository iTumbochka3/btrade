import { LoginAPIInstance } from "..";

const Auth = {
  async login(username: string, password: string) {
    const url = "/api/token";
    const payload = new URLSearchParams();
    //   payload.append("grant_type", "password");
    payload.append("username", username);
    payload.append("password", password);

    try {
      const res = await LoginAPIInstance.post(url, payload);
      //   FIXME: temp
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default Auth;
