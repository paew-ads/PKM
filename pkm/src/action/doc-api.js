import Axios from "axios";

const add = async (info, file) => {
  const jsonInfo = JSON.stringify(info);
  var formData = new FormData();
  formData.append("docfile", file);
  formData.append("info", jsonInfo);
  const res = await Axios.post("/doc/add", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res;
};

// const signin = async (user) => {
//     const result = await Axios.post("/auth/signin", user);
//     return result;
//   };

export { add };
