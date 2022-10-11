import mysql from "mysql";
import dotenv from "dotenv";
export { SingUp, Login, UploadJson };

dotenv.config({path:'../.env'})
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MSQL Connected...");
  }
});

/**
 * SingUp function for create an account
 * @param {id , email , password} info
 */
const SingUp = (info) => {
  this.info = info;
  db.connect(function (err) {
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
  db.connect(function (err) {
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
function UploadJson(fileName, idFile, userId) {
  try {
    con.connect(function (err) {
      if (err) throw err;
      const sql =
        "INSERT INTO json_file (ID_file , file_name , ID_user) VALUES (?,?,?)";
      con.query(sql, [idFile, fileName, userId], function (err, result) {
        if (err) throw err;
        console.log("records inserted:" + result.affectedRows);
      });
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
