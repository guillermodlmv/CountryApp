const { Country, Activity } = require('../db')
const axios = require('axios')
const Sequelize = require('sequelize')
module.exports = {

    getAll: async (req, res) => {
        const countriesApi = await axios.get('https://restcountries.com/v3.1/all');
        try {
            if(req.query.name){
                return await Country.findAll({
                    include: [{ 
                        model: Activity,
                    }],
                    where: { name: { [Sequelize.Op.iLike]: `%${req.query.name}%` }}
                })
                .then(country => country.length? res.send(country): res.status(404).send('Country does not exist'))
                .catch(error=>{error});
            }
            await Promise.all(countriesApi.data.map(e => {
                let {cca3, name, flags, continents, capital, subregion, area, population } = e
                let data ={
                        id: cca3,
                        name: name.common,
                        imgFlag: flags.png,
                        continent: continents[0],
                        capital: capital ? capital[0] : 'No Capital Found',
                        subRegion: subregion ? subregion : 'No Subregion Found',
                        area: Math.round(area),
                        population: population,
                }
                Country.findOrCreate({where: data})
                .catch(error => error)
            }))
            
        } 
        catch (e) {
            console.error(e)
        }
    },

    getById: async (req, res, next) => {
        const id = req.params.id;
        return await Country.findAll({
            include: [{
                model: Activity,
            }],
            where: { id: { [Sequelize.Op.iLike]: `${id}` } }
        })
            .then(results => results.length ? res.send(results) : res.status(404).send('ID NOT FOUND'))
            .catch(error => next(error))
    },

    showAll : async(req, res) =>{
        return await Country.findAll({
            include: [{
                model: Activity
            }],
            limit:250
        })
        .then(results => res.send(results))
    },
}

