import React, {Component} from 'react';
import './tablero.css'
import Tarjeta from './tarjeta'

export default class Tablero extends Component{
    render(){
        return(
            <div className="tablero">
                {
                    this.props.baraja
                    .map((tarjeta,index) =>{
                        const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(tarjeta) > -1
                        return <Tarjeta
                            key={index}
                            icon={tarjeta.icon}
                            estaSiendoComparada = {estaSiendoComparada}
                            seleccionarTarjeta = {() => this.props.seleccionarTarjeta(tarjeta)}
                            adivinada = {tarjeta.adivinada}
                        />
                    })
                }
            </div>
        )
    }
};