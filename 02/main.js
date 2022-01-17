const letter = 'bici coche balón _playstation bici coche peluche'


const listGifts = (carta) =>{
    // ¡Tú puedes!
    let res = carta
        .trim()
        .split(" ")
        .filter((e) => !e.includes("_"))
        .reduce((ac, cu) => ((ac[cu] = (ac[cu] || 0) + 1), ac), {});
    return res

}//listaGifs

const regalos = listGifts(letter);
console.log(regalos)
/* output
/* output
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
