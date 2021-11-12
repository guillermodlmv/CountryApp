const {Activity, Country} = require('../db')
const ModelCrud = require('./index')
const { Op } = require('sequelize');
//const axios = require('axios')

module.exports = {
    addActivity : (req, res) => {
        const {name, difficulty, duration, season } = req.body;
        await Activity.create({
            where: { 
            name,
            difficulty,
            duration,
            season,
            }
        })
        const modelCountry = await Country.findAll({
            where : {
                name:{
                    [Op.in]: Array.isArray(country) ? country : [country]
                }
            }
        })
    }
}