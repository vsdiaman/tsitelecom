const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

// handre errors

const handleErrors = (err) => {
  //   console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // e-mail incorreto
  if (err.message === "email incorreto") {
    errors.email = "esse email não está cadastrado";
  }

  if (err.message === "senha incorreta") {
    errors.password = "essa senha está incorreta";
  }

  //   código de erro duplicado

  if (err.code === 11000) {
    errors.email = "esse email já está cadastrado";
    return errors;
  }

  if (err.message.includes("validação do usuário falhou")) {
    // erros de validação

    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// criar token
const maxAge = 3 * 24 * 60 * 60; // duracao 3 dias
const createToken = (id) => {
  return jwt.sign({ id }, "net ninja secret", {
    expiresIn: maxAge,
  });
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
