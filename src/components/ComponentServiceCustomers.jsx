import React, { Component } from 'react'
import axios from 'axios'
import logo from '../logo.svg';
import Global from '../Global';

export default class ComponentServiceCustomers extends Component {

    state = {
        customers: []
    }

    loadCustomers = () => {
        console.log("Antes del servicio");
        let request = "Customers";
        axios.get(Global.urlNothwind + request).then((response) => {
            console.log("Leyendo...");
            // Los datos del servicio con axios siempre vienen de la propiedad data
            this.setState({
                // data.value porque en la api tenemos el value. Si no estuviera, ponemos data solo
                customers: response.data.value
            })
        })
        console.log("Después del servicio");
    }

    // Para que carguen los clientes al iniciar la página
    componentDidMount = () => {
        this.loadCustomers();
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "#72DCFA", marginBottom: "0px" }}>Service API customers</h1>
                <img style={{ width: "50px", height: "50px" }} src={logo} className="App-logo" alt="logo" />

                <br />
                {/** El botón ya no hace falta porque cargamos los clientes al cargar
                 * <button onClick={this.loadCustomers}>Load customers</button>*/}
                {
                    this.state.customers.map((cliente, index) => {
                        return (<h4 key={index} style={{ color: "gray" }}>
                            <b>Contacto: </b>{cliente.ContactName} -
                            <b> TÍtulo: </b>{cliente.ContactTitle},
                        </h4>)
                    })
                }
            </div >
        )
    }
}

/* Antes de las variables globales
state = {
    customers: []
}

url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";
loadCustomers = () => {
    console.log("Antes del servicio");
    axios.get(this.url).then((response) => {
        console.log("Leyendo...");
        // Los datos del servicio con axios siempre vienen de la propiedad data
        this.setState({
            // data.value porque en la api tenemos el value. Si no estuviera, ponemos data solo
            customers: response.data.value
        })
    })
    console.log("Después del servicio");
}

// Para que carguen los clientes al iniciar la página
componentDidMount = () => {
    this.loadCustomers();
}

render() {
    return (
        <div>
            <h1 style={{ color: "#72DCFA", marginBottom: "0px" }}>Service API customers</h1>
            <img style={{ width: "50px", height: "50px" }} src={logo} className="App-logo" alt="logo" />

            <br />
            {/** El botón ya no hace falta porque cargamos los clientes al cargar
                 * <button onClick={this.loadCustomers}>Load customers</button>*/ /*}
{
this.state.customers.map((cliente, index) => {
return (<h4 key={index} style={{ color: "gray" }}>
<b>Contacto: </b>{cliente.ContactName} -
<b> TÍtulo: </b>{cliente.ContactTitle},
</h4>)
})
}
</div >
)
} 
}*/
