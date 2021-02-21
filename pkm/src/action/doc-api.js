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

const list = async (search) => {
  const url =
    "/doc/list?doccate=" +
    search.doccate +
    "&keyword=" +
    search.keyword +
    "&stdate=" +
    search.stdate +
    "&endate=" +
    search.endate;
  const res = await Axios.get(url);
  return res;
};

const select = async (search) => {
  const res = await Axios.get("/doc/select/" + search);
  return res;
};

export { add, list, select };
