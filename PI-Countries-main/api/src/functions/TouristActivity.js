const {Activity, Country} = require('../db.js')
const { Op } = require('sequelize');

module.exports = {

    addActivity : async (req, res) => {
        const {name, difficulty, duration, season, countryName } = req.body;
        
        const newActivity = await Activity.create({ 
            name,
            difficulty,
            duration,
            season,
        });

        const country = await Country.findAll({
            where: { 
                name: {
                    [Op.in]: Array.isArray(countryName) ? countryName : [countryName]
                }
            }
        });
        await newActivity.setCountries(country);
        res.send(newActivity)
    },
    getAll : async(req, res) =>{
        let allActivities = await Activity.findAll({
            include: [{model: Country}]
        })
        res.send(allActivities)
    }
}