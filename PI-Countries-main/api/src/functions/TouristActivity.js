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
        let countriesName = countryName
        if(typeof countryName === 'string'){
            countriesName = countryName.split(',');
        }
                const country = await Country.findAll({
                    where: { 
                        name: {
                            
                            [Op.in]: Array.isArray(countriesName) ? countriesName : [countriesName]
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