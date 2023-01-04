const { query, Router } = require("express");
const express = require("express");
const { removeListener } = require("../models/user.model");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

//RUTA PARA CREACION DE USUARIOS
router.post("/create-user", async (req, res) => {
  const existUser = await User.find({}, { cc: 1 });
  const newUser = new User(req.body);
  for (let i of existUser) {
    if (newUser.cc === i.cc) {
      return res
        .status(401)
        .json("El usuario ya existe, su C.C ya se encuentra registrada");
    }
  }
  await newUser.save();
  const token = jwt.sign({ _id: newUser._id }, "secretKey");
  return res
    .status(200)
    .json("Usuario creado exitosamente " + "token: " + token);
});
//RUTA PARA VER UN USUARIO
router.get("/user-details",async(req,res) =>{
  const user = await User.findById(req.query.id)
  console.log({data:user})
  return res.status(200).json({data:user})
  
})
//RUTA PARA VER LOS USUARIOS
router.get("/get-users", async (req, res) => {
  const users = await User.find();
  return res.status(200).json( {data:users} );
});

//RUTA PARA ELIMINAR LOS UUSARIOS
router.delete("/delete-user", async (req, res) => {
  await User.findByIdAndDelete(req.query.id);
  return res
    .status(200)
    .json(`Usuario eliminado correctamente id: ${req.query.id}`);
});

//RUTA PARA ACTUALIZAR USUARIOS
router.put("/update-user", async (req, res) => {
  await User.findByIdAndUpdate(req.query.id, { $set: req.body });
  return res.status(200).json("Usuario actualizado correctamente");
});

router.post("/singup", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  const userPass = await User.findOne({ password });
  if (!email || !password) return res.status(401).send("Rellene los campos");
  if (!user) return res.status(401).send("El correo no existe");
  if (!userPass) return res.status(401).send("Contraseña incorrecta");
  let payload = {
    _id: user._id.toString(),
    firtsName: user.firtsName,
    lastName: user.lastName,
    email: user.email,
    isAdmin: user.isAdmin,
    isDev: user.isDev,
    cc: user.cc,
    age: user.age,
    numberPhone: user.numberPhone,
    range:user.range
  };
  console.log(payload);
  const token = jwt.sign(payload, "secretkey");

  return res.status(200).json({ token });
});

module.exports = router;
