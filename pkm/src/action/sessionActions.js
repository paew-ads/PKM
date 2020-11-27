import Axios from "axios";
import { setUserSession  } from "../Utils/Common";

export const login = (user, history) => {
  return () => {
    return Axios.post("http://localhost:3001/api/login", {
      userName: user,
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


