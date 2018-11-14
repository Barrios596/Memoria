import React, {Component} from 'react';
import './Encabezado.css'

export default class Encabezado extends Component{
    render(){
        return (
            <header>
                <div className="titulo">Memoria en React</div>
                <div className="subtitulo">
                    Cantidad de pasos: {this.props.pasos}
                </div>
            </header>
        );
    }
}