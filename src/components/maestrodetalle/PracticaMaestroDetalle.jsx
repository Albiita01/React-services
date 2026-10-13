import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'
import Componente2Practica from './Componente2Practica'

export default class PracticaMaestroDetalle extends Component {

    selectCoche = React.createRef();

    state = ({
        coches: [],
        idCoche: 0
    })

    cargarCoches = () => {
        let request = "api/Coches";

        axios.get(Global.urlCoches + request).then((response) => {
            this.setState({
                coches: response.data
            })
        })
    }

    buscarCoche = (event) => {
        event.preventDefault();
        let id = this.selectCoche.current.value;
        this.setState({
            idCoche: id
        })
    }

    componentDidMount = () => {
        this.cargarCoches();
    }

    render() {
        return (
            <div>
                <h1>Práctica Maestro Detalle</h1>
                <form>
                    <label>Coches: </label>
                    <select ref={this.selectCoche}>
                        {
                            this.state.coches.map((coche, index) => {
                                return (<option key={index} value={coche.idCoche}>{coche.marca}</option>)
                            })
                        }
                    </select>
                    <button onClick={this.buscarCoche}>Mostar datos</button>
                </form>
                {
                    this.state.idCoche != 0 &&
                    (<Componente2Practica idCoche={this.state.idCoche} />)
                }
            </div>
        )
    }
}
