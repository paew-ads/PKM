import Axios from "axios";

const signin = async (user) => {
  const result = await Axios.post("/auth/signin", user);
  return result;
};

const hassSignned = async () => {
  const res = await Axios.get("/auth/hassignned");
  return res;
};

const signout = async () => {
  const res = await Axios.get("/auth/signout");
  return res;
};

const list = async () => {
  const res = await Axios.get("/list");
  return res;
};

const search = async (search) => {
  const res = await Axios.get("/search?keyword=" + search);
  return res;
};

export { signin, hassSignned, signout, list, search };
