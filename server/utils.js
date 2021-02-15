var jwt = require("jsonwebtoken");

function generateToken(user) {
  //1. Don't use password and other sensitive fields
  //2. Use the information that are useful in other parts
  if (!user) return null;

  var u = {
    //userId: user.userId,
    //name: user.name,
    username: user.userName,
    //isAdmin: user.isAdmin,
  };

  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24, // expires in 24 hours
  });
}

function getCleanUser(user) {
  if (!user) return null;

  return {
    //userId: user.userId,
    //name: user.name,
    username: user.userName,
    //isAdmin: user.isAdmin,

    //uid : user.uid,
    //upwd : user.upwd,
    //uname : user.uname,
    //urole : user.urole,
  };
}

module.exports = {
  generateToken,
  getCleanUser,
};
