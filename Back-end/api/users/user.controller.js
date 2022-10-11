import userServes from "./user.service.js";
import { genSaltSync, hashSync, compareSync } from "bcrypt";
import jsonwebtoken from 'jsonwebtoken';
const { sign } = jsonwebtoken;

export default {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    body.unique_name = (
      "user_" + Math.floor(Math.random() * 100000)
    ).toString();
    body.ID_user = (
      "USERID" + Math.floor(Math.random() * 100000000)
    ).toString();
    userServes.create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  getOneUserByUserId: (req, res) => {
    const id = req.params.id;
    userServes.getOneUser(id, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      if (!results) {
        return results.json({
          success: 0,
          message: "Record not Found"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getAllUsers: (req, res) => {
    userServes.getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    userServes.getUserByEmail(body.email, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Invalid email or password"
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsonwebtoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h"
        });
        return res.json({
          message: "login successfully",
          token: jsonwebtoken
        });
      } else {
        return results.json({
          success: 0,
          message: "Invalid email or password"
        });
      }
    });
  }
};
