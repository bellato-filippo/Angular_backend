const Has = require('../models/has');
const Ingredient = require('../models/ingredient');
const Plate = require('../models/plate');


// get ingredient list
const get_ingredient = (req, res) => {
    Ingredient.findAll()
    .then(ingredients => {
        res.status(200).send(ingredients);
    })
    .catch(err => console.log(err))
}

const add_ingredient = (req, res) => {
    Ingredient.create({
        name: req.body.name,
        expirydate: req.body.expirydate
    })
    .then(ingredient => res.sendStatus(201))
    .catch(err => console.log(err));
}


const remove_ingredient_by_id = (req, res) => {
    Ingredient.destroy({
        where: { id: req.params.id}
    })
    .then(ingredient => {
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
}

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