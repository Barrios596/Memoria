import React, {Component} from 'react';
import './Encabezado.css'

export default class Encabezado extends Component{
    render(){
        return (
            <header>
                <div className="titulo">Memoria en React</div>
                <div>
                    <button className="boton-reinicio">
                        Reiniciar juego
                    </button>
                </div>
                <div className="subtitulo">
                    Cantidad de pasos:
                </div>
            </header>
        );
    }
}