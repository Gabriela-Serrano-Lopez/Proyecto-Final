const express = require('express');
const router = express.Router();

const admin = require('firebase-admin');



var serviceAccount = require("../gina-a4be0-firebase-adminsdk-5z0he-88388af39d.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gina-a4be0.firebaseio.com"
  });
const db = admin.database();

router.get('/check', (req, res) => {
    res.send({ message: 'Hola Mundo, en que puedo ayudarte??' })
});

router.get('/qr',(req,res)=>{
    db.ref('codigoQr/codigo1').once('value', (snapshot) => {
        const data = snapshot.val();
        //console.log(snapshot);
        console.log(data);
        res.json(data);
        //res.render('index', {contacts: data});
        
     });
});

module.exports = router;

