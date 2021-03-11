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
    search.endate +
    "&docsend=" +
    search.docsend;
  const res = await Axios.get(url);
  return res;
};

const searchs = async (search) => {
  const url =
    "/doc/search?doccate=" +
    search.doccate +
    "&keyword=" +
    search.keyword +
    "&stdate=" +
    search.stdate +
    "&endate=" +
    search.endate +
    "&docsend=" +
    search.docsend;
  const res = await Axios.get(url);
  return res;
};

const select = async (search) => {
  const res = await Axios.get("/doc/select/" + search);
  return res;
};

const update = async (oldid, ipfrom, ipfile) => {
  const jsonoldid = JSON.stringify(oldid);
  const jsonipfrom = JSON.stringify(ipfrom);
  var formData = new FormData();
  formData.append("ipfile", ipfile);
  formData.append("oldid", jsonoldid);
  formData.append("ipfrom", jsonipfrom);
  console.log({ oldid, ipfrom, ipfile });
  const res = await Axios.post("/doc/update", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res;
};

const deleteDoc = async (rcid) => {
  const res = await Axios.get("/doc/delete/" + rcid);
  return res;
};
export { add, list, select, update, deleteDoc, searchs };
