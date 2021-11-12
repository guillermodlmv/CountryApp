const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});




































// const server = require('./src/app.js');
// const { conn } = require('./src/db.js');
// const { default: axios } = require("axios");
// const {Country} = require('./src/db')

// // Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001,async () => {
//     const countries= await axios.get('https://restcountries.com/v3/all');
//     countries.data.forEach(async (country) => {
//           let subRegion = ''
//           let capital =''
//           if(country.subregion) {
//             subRegion = country.subregion[0]
//           }else if(country.capital){
//             capital =country.capital[0];
//           }
//       try{
//         await Country.create({
//           code: country.cca3,
//           name: country.name.common,
//           imgFlag: country.flags[1],
//           continent: country.continents[0],
//           capital: capital,
//           subRegion:subRegion,
//           area: Math.round(country.area),
//           population: country.population,
          
//         }
//         )
//       }catch(error) {
//         console.error(error);
//       }
//     })
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });
