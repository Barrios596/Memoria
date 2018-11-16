import React from 'react'
import Encabezado from './encabezado';
import Tablero from './tablero';
import './app.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import constructor from './util/constructor'

library.add(faStroopwafel)

const initState = () =>{
    const baraja = constructor();
    return{
        baraja,
        parejaSeleccionada: [],
        estaComparando: false,
        pasos: 0
    };
}
export default class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = initState();
        this.state.baraja.map((tarjeta) => {
        })
    }

    render(){
        return (
            <div className="App">
                <Encabezado pasos = {this.state.pasos} />
                <Tablero
                    baraja={this.state.baraja}
                    parejaSeleccionada={this.state.parejaSeleccionada}
                    seleccionarTarjeta={(tarjeta) => this.seleccionarTarjeta(tarjeta)}
                />
            </div>
        )        
    }

    seleccionarTarjeta(tarjeta){
        if (
            this.state.estaComparando ||
            this.state.parejaSeleccionada.indexOf(tarjeta) > -1 ||
            tarjeta.adivinada
        ){
            return;
        }
        const parejaSeleccionada = [...this.state.parejaSeleccionada, tarjeta];
        this.setState({
            parejaSeleccionada
        });
        if (parejaSeleccionada.length ===2){
            this.compararPareja(parejaSeleccionada);
        }
    }

    compararPareja(parejaSeleccionada){
        this.setState({estaComparando: true});
        setTimeout(() =>{
            const [primeraTarjeta, segundaTarjeta] = parejaSeleccionada;
            let baraja = this.state.baraja;
            if(primeraTarjeta.icon === segundaTarjeta.icon){
                baraja = baraja.map((tarjeta) =>{
                    if(tarjeta.icon !== primeraTarjeta.icon){
                        return tarjeta;
                    }
                    return{...tarjeta, adivinada: true};
                });
            }
            this.yaGano(baraja)
            this.setState({
                parejaSeleccionada: [],
                baraja,
                estaComparando: false,
                pasos: this.state.pasos + 1
            })
        }, 1000)
    }

    yaGano(baraja){
        if(baraja.filter((tarjeta) => !tarjeta.adivinada).length===0){
            alert(`¡Felicidades! Ganaste en ${this.state.pasos} pasos`)
            this.setState({
                parejaSeleccionada: [],
                baraja: constructor(),
                estaComparando:false,
                pasos: 0
            })
        }
    }

}
