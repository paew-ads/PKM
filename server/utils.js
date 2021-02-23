var userModel = "";

function saveUser(user) {
  if (!user) return null;

  userModel = {
    uid: user.uid,
    upwd: user.upwd,
    uname: user.uname,
    urole: user.urole,
  };
}

function getUser() {
  if (!userModel) return null;
  return JSON.stringify(userModel);
}

function deleteUser() {
  userModel = null;
}

module.exports = {
  saveUser,
  getUser,
  deleteUser,
};
