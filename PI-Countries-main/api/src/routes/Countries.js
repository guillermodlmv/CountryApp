const { Router } = require("express");
const router = Router();
const countryFunctions= require("../functions/Country");

router.get('/', countryFunctions.getTen)
router.get('/:id', countryFunctions.getById)


module.exports = router;