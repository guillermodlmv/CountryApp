const { Router } = require("express");
const router = Router();
const countryFunctions= require("../functions/Country");

router.get('/', countryFunctions.getAll)
router.get('/showAll', countryFunctions.showAll)
router.get('/:id', countryFunctions.getById)




module.exports = router;