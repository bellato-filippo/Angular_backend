const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const Plate = require('./models/plate');
const Ingredient = require('./models/ingredient');
const Has = require('./models/has');
//const I = require('./models/ingredient');

// import database
db = require('./database');

// test database connection
db.authenticate()
.then(() => console.log("Database connected"))
.catch(err => console.log("Error: " + err))


const app = express();
app.use(cors());
app.use(express.json());

Plate.belongsToMany(Ingredient, {
    through: Has,
    foreignKey: 'plate'
});

Ingredient.belongsToMany(Plate, {
    through: Has,
    foreignKey: 'ingredient'
});

app.get('/', (req, res) => {
    res.send("Prova");
});

app.use('/api', routes);

const port = 3000;

app.listen(port, console.log("Server running in port " + port));