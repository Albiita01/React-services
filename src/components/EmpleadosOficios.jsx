import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class EmpleadosOficios extends Component {

    urlEmpleados = Global.urlApiEmpleados;
    selectOficio = React.createRef();

    state = {
        empleados: [],
        oficios: []
    }

    loadOficios = () => {
        let request = "api/empleados";
        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("leyendo oficios")
            //PODEMOS CREAR UN OBJETO Set QUE ES UNA COLECCION 
            //QUE NO ADMITE REPETIDOS EN SU INTERIOR 



            let aux = [...new Set(response.data.map(elem => elem.oficio))];
            this.setState({
                oficios: aux
            })
        })
    }

    buscarEmpleados = (event) => {
        event.preventDefault();
        let oficio = this.selectOficio.current.value;

        let request = "api/empleados/empleadosoficio/" + oficio;

        axios.get(this.urlEmpleados + request).then((response) => {

            console.log("leyendo empleados");

            this.setState({

                empleados: response.data

            })

        })

    }



    componentDidMount = () => {

        this.loadOficios();

    }



    render() {

        return (

            <div>

                <h1>Api Empleados Oficios</h1>

                <form>

                    <label>Seleccione un oficio </label>

                    <select ref={this.selectOficio}>

                        {

                            this.state.oficios.map((oficio, index) => {

                                return (<option key={index}>{oficio}</option>)

                            })

                        }

                    </select>

                    <button onClick={this.buscarEmpleados}>

                        Buscar empleados

                    </button>

                </form>

                <table>

                    <thead>

                        <tr>

                            <th>Apellido</th>

                            <th>Oficio</th>

                            <th>Salario</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            this.state.empleados.map((emp, index) => {

                                return (<tr key={index}>

                                    <td>{emp.apellido}</td>

                                    <td>{emp.oficio}</td>

                                    <td>{emp.salario}</td>

                                </tr>)

                            })

                        }

                    </tbody>

                </table>

            </div>)
    }
}

/* // Mi ejercicio (funciona pero los empleados salen en una lista en vez de en una tabla)
urlEmpleados = Global.urlApiEmpleados;
selectOficio = React.createRef();

state = {
    empleados: [],
    oficios: []
}

cargarOficios = () => {
    let request = "api/Empleados";
    axios.get(this.urlEmpleados + request).then((response) => {
        let todosLosOficios = response.data.map(emp => emp.oficio);
        let oficiosUnicos = [...new Set(todosLosOficios)];

        console.log("Leyendo datos de oficios");

        this.setState({
            oficios: oficiosUnicos
        });
    }).catch(error => {
        console.log("Error cargando oficios: ", error);
    });
}

buscarEmpleados = (event) => {
    event.preventDefault();

    let nombreOficio = this.selectOficio.current.value;
    let request = "api/Empleados/EmpleadosOficio/" + nombreOficio;

    axios.get(this.urlEmpleados + request).then((response) => {
        console.log("Leyendo empleados del oficio:", nombreOficio);

        this.setState({
            empleados: response.data
        });
    }).catch(error => {
        console.log("Error buscando empleados: ", error);
        this.setState({ empleados: [] }); // Limpiar si hay error
    });
}

componentDidMount = () => {
    this.cargarOficios();
}

render() {
    return (
        <div>
            <h1>Empleados Oficios</h1>

            <form onSubmit={this.buscarEmpleados}>
                <label>Oficio: </label>
                <select ref={this.selectOficio}>
                    {
                        this.state.oficios.map((oficio, index) => {
                            return (
                                <option key={index} value={oficio}>
                                    {oficio}
                                </option>
                            );
                        })
                    }
                </select>
                <button type="submit">Buscar empleados</button>
            </form>

            <div>
                <ul>
                    {
                        this.state.empleados.map((emp, index) => {
                            return (
                                <li key={index}>
                                    {emp.apellido} - {emp.oficio} - Salario: {emp.salario}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
}
*/