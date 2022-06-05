const express = require('express');
const router = express.Router();
const plate_controller = require('./controllers/plate_controller');
const ingredient_controller = require('./controllers/ingredient_controller');
const has_controller = require('./controllers/has_controller');

// get plate list done
router.get('/plates', plate_controller.get_plate);
// get ingredient list done
router.get('/ingredients', ingredient_controller.get_ingredient);
// get has list done
router.get('/has', has_controller.get_has);

// add plate
router.post('/plates/new', plate_controller.add_plate);
// add ingredient
router.post('/ingredients/new', ingredient_controller.add_ingredient);
// add has
router.post('/has/new', has_controller.add_has);

// get plate by id
router.get('/plate/:id', plate_controller.get_plate_by_id);
// get ingredients by plate id
router.get('/plate/:id/ingredients', ingredient_controller.get_plate_ingredients);
// update plate name and price
router.put('/plate/:id', plate_controller.update_plate_by_id);

// delete plate by id
router.delete('/plate/:id', plate_controller.remove_plate_by_id);
// delete ingredient by id
router.delete('/ingredient/:id', ingredient_controller.remove_ingredient_by_id);
// delete has by id
router.delete('/has/:plate/:ingredient', has_controller.remove_has_by_id);



module.exports = router;