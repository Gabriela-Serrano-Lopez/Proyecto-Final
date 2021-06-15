const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const misRouters = require('./rutas/ruta');
const mail = require('./rutas/sendmail');
const app = express();


  

app.use(cors());


const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use('/', misRouters);
app.get('/', function (req, res) {
    res.send('Hello World');
});


//ENVIO DE CORREOS  //
app.post('/enviar',mail.enviar);

app.post('/api/user', (req, res) => {
    const user = req.body.user;
    users.push(user);
    res.json("user addedd");
});

app.get('/pro', (req, res) =>{
    res.send({
        promociones: {
            "prom":[
                {"nom" :"Sopa maruchan","prom":"2 * $15.00", "des":"Deliciosa sopa instantanea, de sabor pollo con chile habanero. En presentaciión individual.", "cod":"Machumachu"},
                {"nom" :"Taxis fuego","prom":"5 * $45.00", "des":"Deliciosa botana picante, perfecta para botanear, en envases de 50g.", "cod":"pikapika"},
                {"nom" :"Agua ciel","prom":"2 * $10.00", "des":"Deliciosa agua ciel en envases de lito, lista para beber", "cod":"gluglu"},
                {"nom" :"Six de tecate","prom":"6 * $40.00", "des":"Deliciosa bedida refrescante, para calmar la sed de la mala.", "cod":"juevebes"},
                {"nom" :"Doritos","prom":"4 * $35.00", "des":"Deliciosa botana para disfutar, en envases de 50g. Justo para hacer nachos.", "cod":"nachos"}
            ]
        }
            
    });
});

app.get('/ventas', (req, res) =>{
    res.send({
        ventas: {
            "hora":[
                {"hora" :"00","ventas":"3"},
                {"hora" :"01","ventas":"5"},
                {"hora" :"02","ventas":"1"},
                {"hora" :"03","ventas":"0"},
                {"hora" :"04","ventas":"5"},
                {"hora" :"05","ventas":"0"},
                {"hora" :"06","ventas":"1"},
                {"hora" :"07","ventas":"0"},
                {"hora" :"08","ventas":"2"},
                {"hora" :"09","ventas":"15"},
                {"hora" :"10","ventas":"20"},
                {"hora" :"11","ventas":"25"},
                {"hora" :"12","ventas":"30"},
                {"hora" :"13","ventas":"45"},
                {"hora" :"14","ventas":"50"},
                {"hora" :"15","ventas":"45"},
                {"hora" :"16","ventas":"33"},
                {"hora" :"17","ventas":"66"},
                {"hora" :"18","ventas":"69"},
                {"hora" :"19","ventas":"10"},
                {"hora" :"20","ventas":"20"},
                {"hora" :"21","ventas":"35"},
                {"hora" :"22","ventas":"41"},
                {"hora" :"23","ventas":"20"}


            ]
        }
            
    });
});

app.listen(port, () => {
    console.log(`El Servidor esta en: http://localhost:${port}`);
});
