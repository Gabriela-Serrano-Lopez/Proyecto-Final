var nodemailer = require("nodemailer");

//MAIL
exports.enviar = function (req, res) {
  console.log("mail");

  // Definimos el transporter
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pruebaangular01@gmail.com",
      pass: "angular123",
    },
  });

  // Definimos el email
  var mailOptions = {
    from: "pruebaangular01@gmail.com",
    to: "rodrigoelmaps@gmail.com", // aqui va el mail de a quien se mandará
    subject: req.body.asunto, //
    text: req.body.mensaje, //
  };

  // Enviamos el email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Correo no enviado");
    } else {
      console.log("Correo enviado");
    }
  });
};
