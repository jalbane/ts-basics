import houses from './houses'

interface House {
    name: string,
    planets: string | string[]
}
    
interface HouseWithID extends House{
    id: number
}

function findHouses(input: string | House[], filter?: (house: House) => boolean): HouseWithID[]{
    const test: House[] = typeof input === 'string' ? JSON.parse(input) : input
    return (filter ? test.filter(filter) : test).map( (item) => ({
        id: test.indexOf(item),
        ...item,
    }) )
}

console.log(
    findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);
    
console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));