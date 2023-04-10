const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Por favor insira um e-mail"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "por favor digite um email válido"],
  },
  password: {
    type: String,
    required: [true, "igite uma senha"],
    minLength: [6, "mínimo de 6 caracteres"],
  },
});

// disparar uma função após o documento salvo no banco de dados

userSchema.post("save", function (doc, next) {
  console.log("novo usuário foi criado e salvo", doc);
  next();
});

// disparar uma função antes do documento ser salvo no banco de dados

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// método estático para login do usuário

userSchema.statics.login = async function (email, passord) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(passord, user.password);
    if (auth) {
      return user;
    }
    throw Error("senha incorreta");
  }
  throw Error("email incorreto");
};

const User = mongoose.model("user", userSchema);

module.exports = User;
