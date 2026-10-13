import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class EmpleadosComponent extends Component {

    state = ({
        empleados: []
    })

    loadEmpleados = () => {
        let id = this.props.idDepartamento;
        let request = "/api/empleados/empleadosdepartamento/" + id;
        axios.get(Global.urlApiEmpleados + request).then((response) => {
            console.log("Leyendo empleados...");
            this.setState({
                empleados: response.data
            })
        })

    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    componentDidUpdate = (oldProps) => {
        // oldProps son los valores anteriores a props
        console.log("Current: " + this.props.idDepartamento);
        console.log("Antiguo: " + oldProps.idDepartamento);

        // Solamente actualizamos state si props ha cambiado
        if (oldProps.idDepartamento != this.props.idDepartamento) {
            this.loadEmpleados();
        }
    }

    render() {
        return (
            <div>
                <h2>Empleados Component</h2>
                <ul>
                    {
                        this.state.empleados.map((emp, index) => {
                            return (<li key={index}>
                                {emp.apellido}, Oficio: {emp.oficio}
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
