# Contando ovejas para dormir
***

![Node](https://img.shields.io/badge/node-%3E%3D%208.x-brightgreen.svg)

### Pre requisitos

Tener instaldo > NodeJS 8.x and NPM.

### Acerca de
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 

Haz una función que devuelva una lista con todas las ovejas que sean de color **rojo** y que además 
su nombre contenga tanto las letras **n**  Y **a** , sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

```javascript
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

```

Al ejecutar el método debería devolver lo siguiente:
```javascript
const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

# Recordatorio
Si quieres provar tu código no es necesario que lo agregues dentro de un HTML, puedes ejecutarlo en la terminal.

```shell
  node main.js
 ```

Si ves algún error sientete libre de abrir un PR, todo feedback será bien recibido.

__Happy coding! :heart:__
