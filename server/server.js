const app = require("./express");
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
