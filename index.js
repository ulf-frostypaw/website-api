import express from "express";
import mysql from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const db = mysql.createConnection({
    host: process.env.VITE_DATABASE_HOST,     // Cambia esto a la dirección de tu servidor de base de datos
    password: process.env.VITE_DATABASE_PASSWORD, // Cambia esto a tu contraseña de la base de datos
    user: process.env.VITE_DATABASE_USER,    // Cambia esto a tu nombre de usuario de la base de datos
    database: process.env.VITE_DATABASE_NAME // Cambia esto al nombre de tu base de datos
});

db.connect((err) => {
    if (err) {
      console.error('Error al conectarse a la base de datos:', err);
    } else {
      console.log('Conexión a la base de datos establecida');
    }
  });
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/users", (req, res) => { // fetch users from DB
    res.json({users: {
        name: "John",
        age: 30
    }});
});
/* EMAIL CONFIGS */
/* USER CONFIGS */
app.get("/user/:id", (req, res) => {
    // retrun user data
});
app.post("/user/:id", (req, res) => {
    // create user
});
app.put("/user/:id", (req, res) => {
    // update user (all data is saved)
});
app.path("/user/:id", (req, res) => {
    // update user data (one param)
});
app.delete("/user/:id", (req, res) => {
    // delete user 
});
app.get("/verify/:code", (req, res) => {
  res.status(200).send("Code verified");
});
app.get("/watch/:id_video", (req, res) => {
  res.send(`Viendo: ${req.params.id_video}`);
})
app.get("/search", (req, res) => { // FORMULARIO DE BUSQUEDA. BSUCA EN LA BASE DE DATOS
  res.send(`Buscando: ${req.query.q}`);
})

app.use((req, res) => {
    res.status(404).json({"errorMessage":{"title":"error 404","description":"Pagina no registrada en la API"}});
})

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});