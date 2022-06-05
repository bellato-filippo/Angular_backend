const { redirect } = require('express/lib/response');
const Plate = require('../models/plate');


const get_plate =  (req, res) => {
    Plate.findAll()
    .then(plates => {
            res.status(200).send(plates);
    })
    .catch(err => console.log(err))
}

const add_plate = (req, res) => {
    Plate.create({
        name: req.body.name,
        price: req.body.price
    })
    .then(plate => res.sendStatus(201))
    .catch(err => console.log(err));
}

const get_plate_by_id = (req, res) => {
    Plate.findByPk(req.params.id)
    .then(plate => {
        res.status(200).send(plate);
    })
    .catch(err => console.log(err))
}



const remove_plate_by_id = (req, res) => {
    Plate.destroy({
        where: { id: req.params.id}
    })
    .then(plate => {
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
}

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