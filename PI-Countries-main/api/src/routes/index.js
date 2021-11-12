// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require('express');
const {start} = require('../functions/Country.js')
const CountriesRoute = require('./Countries.js');
const ActivityRoute = require("./TouristActivity.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", CountriesRoute);
router.use("/activity", ActivityRoute);
router.use('/', start)


module.exports = router;
