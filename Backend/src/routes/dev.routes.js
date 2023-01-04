const { query, Router } = require("express");
const express = require("express");
const { removeListener } = require("../models/user.model");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Dev = require("../models/dev.model");

//RUTA PARA CREACION DE USUARIOS
router.post("/create-dev", async (req, res) => {
  const existDev = await Dev.find({}, { cc: 1 });
  const newDev = new Dev(req.body);
  for (let i of existDev) {
    if (newDev.cc === i.cc) {
      return res
        .status(401)
        .json("El Developer ya existe, su C.C ya se encuentra registrada");
    }
  }
  await newDev.save();
  const token = jwt.sign({ _id: newDev._id }, "secretKey");
  return res
    .status(200)
    .json("Developer creado exitosamente" + "token: " + token);
});
//OBTENER IFORMACIONDE UN DEV
router.get("/dev-details",async(req,res) =>{
  const dev = await Dev.findById(req.query.id)
  console.log({data:dev})
  return res.status(200).json({data:dev})
  
})
//RUTA PARA VER LOS USUARIOS
router.get("/get-dev", async (req, res) => {
  const devs= await Dev.find();
  return res.status(200).json({ data: devs });
});

//RUTA PARA ELIMINAR LOS UUSARIOS
router.delete("/delete-devs", async (req, res) => {
  await Dev.findByIdAndDelete(req.query.id);
  return res
    .status(200)
    .json(`Developer eliminado correctamente id: ${req.query.id}`);
});

//RUTA PARA ACTUALIZAR USUARIOS
router.put("/update-dev", async (req, res) => {
  await Dev.findByIdAndUpdate(req.query.id, { $set: req.body });
  return res.status(200).json("Developer actualizado correctamente");
});
router.post("/singup", async (req, res) => {
  const { email, password } = req.body;
  let user = await Dev.findOne({ email });
  const userPass = await Dev.findOne({ password });
  if (!email || !password) return res.status(401).send("Rellene los campos");
  if (!user) return res.status(401).send("El correo no existe");
  if (!userPass) return res.status(401).send("Contraseña incorrecta");
 let payload = {
  _id: user._id.toString(),
  firtsName: user.firtsName,
  lastName: user.lastName,
  email: user.email,
  isAdmin: user.isAdmin,
  cc:user.cc,
  isDev:user.isDev,
  age:user.age,
  numberPhone:user.numberPhone,
  devType:user.devType,
  tecno:user.tecno,
  proyects:user.proyects,
  experience:user.experience

 }
 console.log(payload)
  const token = jwt.sign(payload, "secretkey");

  return res.status(200).json({token});
});

module.exports=router
