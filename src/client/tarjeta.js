import React, {Component} from 'react';
import './tarjeta.css'
import FlipCard from 'react-flipcard-2'

export default class Tarjeta extends Component{
    render(){
        return(
            <div className="tarjeta" onClick={this.props.seleccionarTarjeta}>
                <FlipCard
                    flipped = {this.props.estaSiendoComparada || this.props.adivinada}
                    disabled={true}
                >
                <div className="encima"></div>
                <div className="debajo">
                    <i className={`fab ${this.props.icon} fa-5x`}></i>
                </div>
                </FlipCard>
            </div>
        )
    }
}