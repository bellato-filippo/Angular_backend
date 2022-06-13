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
// allows restricted resources on a web page to be requested
// from another domain outside the domain from which the first resource was served
app.use(cors());
//deals with json
app.use(express.json());

//specifies the relation between ingredient and plate
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

//uses API routes
app.use('/api', routes);

const port = 3000;

app.listen(port, console.log("Server running in port " + port));