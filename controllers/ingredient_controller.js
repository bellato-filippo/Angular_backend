const Has = require('../models/has');
const Ingredient = require('../models/ingredient');
const Plate = require('../models/plate');


// GET all ingredients
const get_ingredient = (req, res) => {
    Ingredient.findAll()
    .then(ingredients => {
        res.status(200).send(ingredients);
    })
    .catch(err => console.log(err))
}

// POST ingredient. id is automatically incremented
const add_ingredient = (req, res) => {
    Ingredient.create({
        name: req.body.name,
        expirydate: req.body.expirydate
    })
    .then(ingredient => res.sendStatus(201))
    .catch(err => console.log(err));
}

// REMOVE ingredient by id. id is specified in the URI
const remove_ingredient_by_id = (req, res) => {
    Ingredient.destroy({
        where: { id: req.params.id}
    })
    .then(ingredient => {
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
}

// GET all the ingredients of a specified plate id. Joins the has and plate table
const get_plate_ingredients = (req, res) => {
    Ingredient.findAll({
        attributes: ['id', 'name', 'expirydate'],
        include: {
            model: Plate,
            where: {
                id: req.params.id
            }
        }
    }).then(ingredient => {
        res.status(200).send(ingredient);
    }).catch(err => console.log(err));
}


module.exports = {
    get_ingredient,
    add_ingredient,
    remove_ingredient_by_id,
    get_plate_ingredients
}