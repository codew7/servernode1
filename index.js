const express = require("express");
const app = express();

// OBLIGATORIO: usar SOLO el puerto de Railway
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Servidor Node funcionando");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor activo en puerto", PORT);
});
