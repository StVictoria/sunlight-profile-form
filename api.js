const axios = require("axios");

const express = require("express");
var cors = require("cors");
const app = express();
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api", (request, response) => {
  console.log("url", request.url);
  console.log("body", request.body);

  axios
    .post("http://jsonplaceholder.typicode.com/posts", request.body)
    .then((res) => {
      console.log("Body: ", res);
    })
    .catch((err) => {
      console.error(err);
    });

  response.end();
});

app.listen(3005);
