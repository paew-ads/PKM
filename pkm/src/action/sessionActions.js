import Axios from "axios";
import { setUserSession } from "../Utils/Common";

export const login = (uid, upwd, history) => {
  return () => {
    return Axios.post("http://localhost:3001/authen", {
      id: uid,
      pwd: upwd,
    })
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
