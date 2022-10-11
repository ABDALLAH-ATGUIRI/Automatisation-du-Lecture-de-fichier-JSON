import db from "../../config/database.js";

const pool = db.pool();
export default {
  create: (data, callBack) => {
    pool.query(
      `insert into users(ID_user , unique_name , email , password )
              values(?,?,?,?)`,
      [data.ID_user, data.unique_name, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(
      `SELECT ID_user , unique_name , email , password FROM users`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOneUser: (id, callBack) => {
    pool.query(
      `SELECT ID_user , unique_name , email , password FROM users WHERE ID_user = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);

      }
    );
  },
  getUserByEmail:(email,callBack)=>{
    pool.query(
      `SELECT * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    )
  }
};
