import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosDepartamentos extends Component {

    // Versión 2: con un select para elegir el departamento
    selectIdDepartamento = React.createRef();
    urlEmpleados = Global.urlApiEmpleados;
    urlDepartamentos = Global.urlApiDepartamentos;

    buscarEmpleados = (event) => {
        event.preventDefault();
        //NO NECESITAMOS QUE SEA UN NUMERO (parseInt) 
        //PORQUE LO VAMOS A CONCATENAR CON UN request/endpoint 
        let idDepartamento = this.selectIdDepartamento.current.value;
        let request = "api/empleados/empleadosdepartamento/" + idDepartamento;

        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("leyendo empleados");
            this.setState({
                empleados: response.data
            })
        })
    }

    loadDepartamentos = () => {
        let request = "webresources/departamentos";
        axios.get(this.urlDepartamentos + request).then((response) => {
            console.log("Leyendo departamentos")
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    state = {
        empleados: [],
        departamentos: []
    }

    render() {
        return (
            <div>
                <h1>Api Empleados Departamentos</h1>
                <form>
                    <label>Seleccione departamento: </label>
                    <select ref={this.selectIdDepartamento}>
                        {
                            this.state.departamentos.map((dept, index) => {
                                return (<option key={index} value={dept.numero}>
                                    {dept.nombre}
                                </option>)
                            })
                        }
                    </select>
                    <button onClick={this.buscarEmpleados}>

                        Buscar empleados

                    </button>

                </form>

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

/* Versión 1: con un input para buscar el departamento
cajaIdDepartamento = React.createRef();
urlEmpleados = Global.urlApiEmpleados;

buscarEmpleados = (event) => {
    event.preventDefault();
    // No necesitamos que sea un número (parseInt) porque lo vamos a concatenar con un request/endpoint
    let idDepartamento = this.cajaIdDepartamento.current.value;
    let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
    axios.get(this.urlEmpleados + request).then((response) => {
        console.log("Leyendo empleados...");
        this.setState({
            empleados: response.data
        })
    })
}

state = {
    empleados: []
}

render() {
    return (
        <div>
            <h1>API Empleados Departamento</h1>
            <form>
                <label>ID Departamento: </label>
                <input type='text' ref={this.cajaIdDepartamento} />
                <button onClick={this.buscarEmpleados}>Buscar empleados</button>
                <ul>
                    {
                        this.state.empleados.map((emp, index) => {
                            return (<li key={index}>{emp.apellido} | {emp.oficio}</li>)
                        })
                    }
                </ul>
            </form>
        </div>
    )
}
} */
