import shuffle from 'lodash.shuffle';
import iconos from './iconos'

const numTarjetas = 20;

export default () =>{
    const clasesFontAwesome = iconos()
    let tarjetas = [];
    let indice = 0;
    while(tarjetas.length < numTarjetas){
        const tarjeta = {
            icon: clasesFontAwesome[indice],
            adivinada: false
        };
        tarjetas.push(tarjeta);
        tarjetas.push({...tarjeta});
        indice++;
    }
    return shuffle(tarjetas);
}