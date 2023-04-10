const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRouter = require("./routes/authRoutes");

const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");

//database connection

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const PORT_BACK = process.env.DB_PORT_BACKEND;

// const connect = () => {
//   mongoose.connect(
//     `mongodb+srv://${dbUser}:${dbPassword}@apicluster0.0ffk5gy.mongodb.net/bancodaapi?retryWrites=true&w=majority`
//   );
//   const connection = mongoose.connection;

//   connection.on("error", () => {
//     console.error("Erro ao conectar com o MongoDb");
//   });
//   connection.on("open", () => {
//     console.log("Conectado ao mongoDB com sucesso!");
//   });
// };

const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@apicluster0.0ffk5gy.mongodb.net/bancodaapi?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT_BACK, function () {
      console.log("Server MongoDb is running on port " + PORT_BACK);
    });
  })
  .catch((err) => console.log("Error na aplicação", err));

// app.use(cors({ credentials: true, origin: "http://localhost:4200/" }));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRouter);

//cookies

// app.get("/set-cookies", (req, res) => {
//   // res.setHeader("Set-Cookie", "newUser-true");
//   res.cookie("newUser", false);
//   res.cookie("isEmployee", true, {
//     maxAge: 1000 * 60 * 60 * 24,
//     httpOnly: true,
//   }); //time max of cicle cookie

//   res.send("you got the cookies!");
// });

// app.get("/read-cookies", (req, res) => {
//   const cookies = req.cookies;

//   console.log(cookies.newUser);

//   res.json(cookies);
// });

module.exports = mongoose;
