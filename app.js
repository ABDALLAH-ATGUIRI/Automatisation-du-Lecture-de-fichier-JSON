import express from "express";
import hbs  from "express-handlebars";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "hbs");
app.engine('handlebars', hbs({defaultLayout: 'main'}));

app.get("/", (req, res) => {
    res.render("home");
  });

app.listen(port, () => {
  console.log("the server is listening on port " + port);
});

