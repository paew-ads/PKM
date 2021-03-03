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

const add = async (ipForm) => {
  console.log(ipForm);
  const res = await Axios.post("/add", ipForm);
  return res;
};

const select = async (olduid) => {
  const res = await Axios.get("/select/" + olduid);
  return res;
};

const update = async (olduid, ipForm) => {
  const res = await Axios.post("/update", { olduid, ipForm });
  return res;
};

const deleteUser = async (uid) => {
  const res = await Axios.get("/delete/" + uid);
  return res;
};

export {
  signin,
  hassSignned,
  signout,
  list,
  search,
  add,
  select,
  update,
  deleteUser,
};
