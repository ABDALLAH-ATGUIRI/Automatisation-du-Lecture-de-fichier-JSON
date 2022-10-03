const express = require("express");
const upload = require("express-fileupload");
const port = 3000;
const app = express();

app.use(upload());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/", (req, res) => {
  if (res.files) console.log(req.files);
  let file = req.files.file;
  let filename = file.name;
  console.log(filename);
  file.mv("./uploads/" + filename, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send("File Uploaded");
    }
  });
});

// uploadImg(evt, index) {
//   let formData = new FormData();
//   let imgFile = evt.target.files[0];

//   if (imgFile === undefined) return null;

//   let ext = imgFile.name.split(".").pop();
//   if (ext == 'jpg' || ext =="png" || ext =='jpeg') {
//     let uniqName =
//       Math.floor(Math.random() * Math.pow(10, 10)).toString() + "." + ext;

//     formData.append("uniqName", uniqName);
//     formData.append("avatar", imgFile);

//     axios({
//       method: "POST",
//       url: "http://attic.local/Includes/uploads",
//       data: formData,
//       headers: { "Content-Type": "multipart/form-data" },
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           this.image = uniqName;
//         }
//       })
//       .catch(console.error);
//   }else{
//     alert('Vous ne pouvez pas télécharger ce fichier')
//   }
// }

//********************************************************************************************** */
/**
 * Validate file json
 * @returns
 */
function ValidateFileJsone() {
  const fileInput = document.getElementById("UploadFileJson");

  const filePath = fileInput.value;
  const allowedExtensions = /(\.json)$/i;
  const validName = /^[a-zA-Z0-9. ]+$/;

  if (!allowedExtensions.exec(filePath)) {
    alert("Please upload file having extensions .json only.");
    fileInput.value = "";
    return false;
  } else if (validName.test(filePath.split(".")[0])) {
    alert(
      "Veillez à bien respecter les bonnes pratiques de nommage pour votre pièce jointe : pas de caractères spéciaux ni d'accents."
    );
    fileInput.value = "";
    return false;
  } else {
    // Json preview
    if (fileInput.files && fileInput.files[0]) {
      // your return
      console.log(reader.result);
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}
//**********************************************************************************************
