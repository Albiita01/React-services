import React, { Component } from 'react'
import PracticaMaestroDetalle from './PracticaMaestroDetalle'
import Global from '../../Global';
import axios from 'axios';

/*
function getParametrosCine() {
    // Recuperamos los datos de parámetros del path con useParams
    let { idPeli, otroParametro } = useParams();

    // Una vez que tenemos los datos, incluimos en props del componente
    return (<Cine idPeli={idPeli} otroParametro={otroParametro} />)
}*/

export default class Componente2Practica extends Component {

    urlCoche = Global.urlCoches;

    mostarDetalles = () => {
        let request = "api/Coches/FindCoche/" + this.props.idCoche;

        axios.get(this.urlCoche + request).then((response) => {
            console.log("ID: " + this.props.idCoche);
            this.setState({
                coche: response.data
            })
        })
    }

    componentDidMount = () => {
        this.mostarDetalles();
        console.log("ID: " + this.props.idCoche);
    }

    componentDidUpdate = (oldProps) => {
        console.log("Current: " + this.props.idCoche);
        console.log("Old: " + oldProps.idCoche);
        if (oldProps.idCoche != this.props.idCoche) {
            this.mostarDetalles();
        }
    }

    state = ({
        coche: null
    })

    render() {
        return (
            <div>
                <h3>Detalles del coche</h3>
                <p>{this.state.coche.idCoche} - </p>
            </div>
        )
    }
}
