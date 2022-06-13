const { redirect } = require('express/lib/response');
const Plate = require('../models/plate');

// GET all the plates
const get_plate =  (req, res) => {
    Plate.findAll()
    .then(plates => {
            res.status(200).send(plates);
    })
    .catch(err => console.log(err))
}

// POST a new plate. Parameters specified in the body. The ID auto increments automatically
const add_plate = (req, res) => {
    Plate.create({
        name: req.body.name,
        price: req.body.price
    })
    .then(plate => res.sendStatus(201))
    .catch(err => console.log(err));
}

//GET plate by id. id specidied in the URI
const get_plate_by_id = (req, res) => {
    Plate.findByPk(req.params.id)
    .then(plate => {
        res.status(200).send(plate);
    })
    .catch(err => console.log(err))
}


//REMOVE plate by id. id specified in the URI
const remove_plate_by_id = (req, res) => {
    Plate.destroy({
        where: { id: req.params.id}
    })
    .then(plate => {
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
}

//PUT plate by id. Changes name and price. id specified in the URI
const update_plate_by_id = (req, res) => {
    Plate.update(
        {
            name: req.body.name,
            price: req.body.price
        },
        {where: {
            id: req.params.id
        }}
    )
    .then(plate => res.sendStatus(201))
    .catch(err => console.log(err))
}




module.exports = {
    get_plate,
    add_plate,
    get_plate_by_id,
    remove_plate_by_id,
    update_plate_by_id
}