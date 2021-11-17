const activityFunctions= require("../functions/TouristActivity.js");
const { Router } = require("express");
const router = Router();

router.post('/', activityFunctions.addActivity)
router.get('/', activityFunctions.getAll)

module.exports= router;