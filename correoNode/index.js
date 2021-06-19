const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./cuenta.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("El servidor funciona en el puerto 3000");
});


app.post("/sendmail", (req, res) => {
  let user = req.body;
  sendMail(user, info => {
    console.log(`Todo enviado`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: "Soporte de Automaga", // sender address
    to: "automaga.soporte@gmail.com", // list of receivers
    subject: "Pregunta acerca de servicio", // Subject line
    html: `<h2>El usuario -> ${user.name} ${user.apepat} ${user.apemat}</h2><br>
    <h2>Correo de contacto -> ${user.email}</h2><br>
    <h2>Tiene la siguiente pregunta -> ${user.pregunta}</h2><br>`

  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

// main().catch(console.error);