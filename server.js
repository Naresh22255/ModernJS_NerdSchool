const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => response.send("Hello Naresh"));

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`);
});

const morgan = require("morgan");
app.use(morgan("dev"));
