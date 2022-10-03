const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "format-json"
});

let info = [["hello word", "ATGUIRI", "open&Sesame"]];
export { SingUp, Login, UploadJson };
/**
 * SingUp function for create an account
 * @param {id , email , password} info
 */

const SingUp = (info) => {
  this.info = info;
  con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
    let sql = "INSERT INTO users (idUser , email,password) VALUES ?";
    con.query(sql, [this.info], function (err, result) {
      if (err) throw err;
      console.log("records inserted:" + result.affectedRows);
    });
  });
};

/**
 * Login function in order to enter an account
 * @param {email , password} info
 */
const Login = (info) => {
  this.info = info;
  con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
    let sql = "SELECTED * FROM users WHERE email VALUES ?";
    con.query(sql, [this.info], function (err, result) {
      if (err) throw err;
    });
  });
};

/**
 * Login function in order to enter an account
 * @param {idFile , fileName , userId} info file json
 */
function UploadJson(idFile, fileName, userId) {
  con.connect(function (err) {
    if (err) throw err;
    const sql = "INSERT INTO filejson (idFile , fileName , userId) VALUES ?";
    con.query(sql, [this.info], function (err, result) {
      if (err) throw err;
      console.log("records inserted:" + result.affectedRows);
    });
  });
}
