// your code goes here
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
];

const contarOvejas = (ovejas) =>{
        return ovejas.filter(({color,name}) => color === 'rojo' &&  (name.toLowerCase()).includes('n') && (name.toLowerCase()).includes('a'))
}//contarOvejas


const ovejasFiltradas = contarOvejas(ovejas)
// Descomenta esta línea
console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
