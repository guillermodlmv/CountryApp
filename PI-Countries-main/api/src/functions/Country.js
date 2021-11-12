const { Country, Activity } = require('../db')
const axios = require('axios')
const Sequelize = require('sequelize')
module.exports = {

    getTen: async (req, res) => {
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
                return await Country.findAll({
                    limit: 10
                })
                .then((results) => { res.send(results) })
            
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
            .then(results => results.length ? res.send(results) : res.status(404).send('No matching ID'))
            .catch(error => next(error))
    },
    start: async (req, res) => {
        const countriesApi = axios.get('https://restcountries.com/v3.1/all');
        countriesApi
            .then(response => {
                response.data.map(e => {
                    let { cca3, name, flags, continents, capital, subregion, area, population } = e
                    Country.create({
                        id: cca3,
                        name: name.common,
                        imgFlag: flags.png,
                        continent: continents[0],
                        capital: capital ? capital[0] : 'No Capital Found',
                        subRegion: subregion ? subregion : 'No Subregion Found',
                        area: Math.round(area),
                        population: population,
                    })
                        .catch(error => error)
                })


            })
    }
}

