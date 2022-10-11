import mysql from "mysql";

const pool = () =>
  mysql.createConnection({
    port : process.env.DATABASE_PORT,
    host: "localhost",
    user: "root",
    password: "",
    database: "format-json",
  });

  export default {pool}