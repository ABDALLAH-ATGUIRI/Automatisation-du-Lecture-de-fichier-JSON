import * as database from "./database.js";

const express = require("express");
const upload = require("express-fileupload");
const port = 3000;
const app = express();

app.use(upload());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app
  .post("/", (req, res) => {
    if (res.files) consolce.log(req.files);
    const file = req.files.file;
    const uniqueName = new Date().getTime().toString() + ".json";
    console.log(uniqueName);
    file.mv("./uploads/" + uniqueName, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("File Uploaded");
      }
    });
  })
  .subscribe(() => {
    console.log("gggggggggggggggggggg");
    database.UploadJson(file, uniqueName, "hello word");
  });
