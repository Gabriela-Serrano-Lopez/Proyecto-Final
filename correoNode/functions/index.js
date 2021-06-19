const functions = require('firebase-functions');

var Firebase=require('firebase');
var morgan = require('morgan'); 
var methodOverride = require('method-override');
var multer  =   require('multer');
var fs = require("fs");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const details = require("./cuenta.json");
//const { request } = require('express');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//



var enero= `${10}` ;
var febrero= `${11}`;
var marzo= `${12}`;
var abril= `${13}`;
var mayo= `${15}`;
var junio= `${17}`;
var julio= `${19}`;
var link = 'https://mega.nz/file/0Vt3iTzJ#4LjTuYUFocVbLmwoAC-t3jlUbQmkDWA2k7Z_xRcMWtc';

const app = express();

////////// BASE DE DATOS ///////////////

app.use(function(req, res, next) { //allow cross origin requests

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Max-Age", "3600");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();

});

Firebase.initializeApp({

  databaseURL: "https://app-node-46ee6.firebaseio.com/",
  serviceAccount: './llave.json', //this is file that I downloaded from Firebase Console

});

var db = Firebase.database();
var usersRef = db.ref("users");
var unidadRef = db.ref("unidades");
var chofiRef = db.ref("choferes");

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use('/public/uploads',express.static(__dirname + '/public/uploads'));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//// CREAR USUARIO /////
app.post('/api/createUser', function(req, res) {
  
   var data = req.body;

  usersRef.push(data, function(err) {

      if (err) {
        res.send(err)
      } else {
        res.json({message: "Success: User Save.", result: true});
      }

  });
});


//// CREAR UNIDAD /////
app.post('/api/createUnity', function(req, res) {
  
  var data = req.body;

   unidadRef.push(data, function(err) {

     if (err) {
       res.send(err)
     } else {
       res.json({message: "Success: User Save.", result: true});
     }

 });
});


//// CREAR CHOFER /////
app.post('/api/createDriver', function(req, res) {
  
  var data = req.body;

 chofiRef.push(data, function(err) {

     if (err) {
       res.send(err)
     } else {
       res.json({message: "Success: User Save.", result: true});
     }

 });
});


//////// OBTENER  USERS ///


app.get('/api/getUsers', function(req, res) {

    var uid = "-Ks8HilZxX5vtFPqGu75";

    if (uid.length != 20) {

        res.json({message: "Error: uid must be 20 characters long."});

    } else {
        usersRef.once("value", function(snapshot) {

            if (snapshot.val() == null) {
                res.json({message: "Error: No user found", "result": false});

            } else {
                res.json({"data": snapshot.val()});
            }

        });
    }

});

//////// OBTENER UNIDAD////////

app.get('/api/getUnity', function(req, res) {

  var uid = "-Ks8HilZxX5vtFPqGu75";

  if (uid.length != 20) {

      res.json({message: "Error: uid must be 20 characters long."});

  } else {
      unidadRef.once("value", function(snapshot) {

          if (snapshot.val() == null) {
              res.json({message: "Error: No user found", "result": false});

          } else {
              res.json({"data": snapshot.val()});
          }

      });
  }

});



//////// OBTENER  CHOFERES ///


app.get('/api/getDrivers', function(req, res) {

  var uid = "-Ks8HilZxX5vtFPqGu75";

  if (uid.length != 20) {

      res.json({message: "Error: uid must be 20 characters long."});

  } else {
      chofiRef.once("value", function(snapshot) {

          if (snapshot.val() == null) {
              res.json({message: "Error: No user found", "result": false});

          } else {
              res.json({"data": snapshot.val()});
          }

      });
  }

});



//////////// BASE DE DATOS ////////////////

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.get('/timestamp',(request,response)=>{
    response.send(`${Date.now()}`);
})
app.get('timestamp-cached',(request,response)=>{
    response.set('Cache-Control','public,max-age=300,smaxage=600')
})

app.get('/apps', (req, res)=>{
  res.json({link});
})

app.get('/meses',(request,response)=>{
  console.log("siu")
  
  response.json({enero, febrero, marzo, abril, mayo, junio, julio})
})

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
    from: "Soporte carloca's", // sender address
    to: "csopoprte@gmail.com", // list of receivers
    subject: "Pregunta acerca de servicio", // Subject line
    html: `<h2>El usuario -> ${user.name} ${user.apepat} ${user.apemat}</h2><br>
    <h2>Correo de contacto -> ${user.email}</h2><br>
    <h2>Tiene la siguiente pregunta -> ${user.pregunta}</h2><br>`

  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

 exports.app = functions.https.onRequest(app);
