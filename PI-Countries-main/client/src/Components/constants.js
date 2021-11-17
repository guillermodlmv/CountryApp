// used to render the same component with different content
const numbers =[1, 2, 3, 4, 5];
const seasons =['Summer', 'Autumn', "Winter", "Spring"];
const continent = ["Africa", "America", "Asia", "Europe", 'Oceania'];
const populationValues = ["Smaller Population", "Longer Population", "No Filter"];

// export all the content in a single arr
export const allArr= [
    {arr:numbers, title:"Activity Difficulty"},
    {arr:seasons, title:"Activity Season" },
    {arr:continent, title:"Country Continent" },
    {arr:populationValues, title:"Sort by Population" },
]