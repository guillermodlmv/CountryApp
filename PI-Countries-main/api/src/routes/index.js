// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require('express');
const CountriesRoute = require('./Countries.js');
const ActivityRoute = require("./TouristActivity.js");
const router = Router();

// Configurar los router
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", CountriesRoute);
router.use("/activities", ActivityRoute);


module.exports = router;
