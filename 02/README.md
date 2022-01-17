# Ayuda a el elfo a tener listos los regalos 
***
![Node](https://img.shields.io/badge/node-%3E%3D%208.x-brightgreen.svg)

### Pre requisitos 
Tener instaldo > NodeJS 8.x and NPM.

### Acerca de 
Te ha llegado una carta ✉️ con todos los regalos que debes preparar.
El problema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque **ten cuidado**, porque al ser niños, igual han agregado más espacios de la cuenta)

Encima nos hemos dado cuenta de que algunas palabras vienen con un ```_``` delante de la palabra, por ejemplo  ```_playstation```, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

```javascript
const carta = 'bici coche balón _playstation bici coche peluche'
```
Al ejecutar el método debería devolver lo siguiente:

```javascript
onst regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
```

# Recordatorio
Si quieres provar tu código no es necesario que lo agregues dentro de un HTML, puedes ejecutarlo en la terminal.

```shell
  node main.js
 ```

Si ves algún error sientete libre de abrir un PR, todo feedback será bien recibido.

__Happy coding! :heart:__

