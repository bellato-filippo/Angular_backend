const Has = require('../models/has');

const get_has = (req, res) => {
    Has.findAll()
    .then(has => {
        res.status(200).send(has);
    })
    .catch(err => console.log(err))
}

const add_has = (req, res) => {
    data = {
        plate: req.plate,
        ingredient: req.ingredient
    }
    let {plate, ingredient} = data;
    Has.create({
        plate,
        ingredient
    })
    .then(has => res.sendStatus(201))
    .catch(err => console.log(err));
}

const remove_has_by_id = (req, res) => {
    Has.destroy({
        where: { 
            plate: req.params.plateId,
            ingredient: req.params.ingredientId
        }
    })
    .then(has => {
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
}



module.exports = {
    get_has,
    add_has,
    remove_has_by_id
}