const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 9000;

/*** Initialize Middleware ***/
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
