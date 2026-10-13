import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class ComponentServiceSuppliers extends Component {

    // El ejercicio del profe después de las variables globales
    cajaID = React.createRef();

    findSupplier = (event) => {
        event.preventDefault();
        let id = parseInt(this.cajaID.current.value);
        //CARGAMOS LOS DATOS DE SUPPLIERS DE API 
        let request = "Suppliers";
        axios.get(Global.urlNothwind + request).then((response) => {
            //BUSCAMOS DENTRO DEL STATE EL DATO CON ID 
            for (let elem of response.data.value) {
                if (elem.SupplierID == id) {
                    //LO TENEMOS!!! 
                    this.setState({ proveedor: elem })
                    break;
                }
            }
        })
    }

    state = {
        suppliers: [], proveedor: null
    }

    loadSuppliers = () => {
        console.log("antes");
        let request = "Suppliers";
        axios.get(Global.urlNothwind + request).then((response) => {
            console.log("Leyendo...");
            this.setState({
                // data.value porque en la api tenemos el value. Si no estuviera, ponemos data solo
                suppliers: response.data.value
            })
        })
        console.log("despues");
    }

    componentDidMount = () => {
        this.loadSuppliers();
    }

    render() {
        return (
            <div>
                <h1>Service Api Suppliers</h1>
                <form>
                    <label>Id Proveedor: </label>
                    <input type="text" ref={this.cajaID} />
                    <button onClick={this.findSupplier}>
                        Buscar
                    </button>
                </form>
                {
                    this.state.proveedor &&
                    (<div>
                        <h2>Contact: {this.state.proveedor.ContactName}</h2>
                        <h2>Title: {this.state.proveedor.ContactTitle}</h2>
                        <h2>Dirección: {this.state.proveedor.Address}</h2>
                    </div>)
                }
                <ul>
                    {
                        this.state.suppliers.map((dato, index) => {
                            return (
                                <li key={index}>
                                    Id: {dato.SupplierID},
                                    Name: {dato.ContactName}
                                </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}


/*// El ejercicio del profe antes de modificarlo con las variables globales (funciona)
url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"
cajaID = React.createRef();

findSupplier = (event) => {
    event.preventDefault();
    let id = parseInt(this.cajaID.current.value);
    //CARGAMOS LOS DATOS DE SUPPLIERS DE API 
    axios.get(this.url).then((response) => {
        //BUSCAMOS DENTRO DEL STATE EL DATO CON ID 
        for (let elem of response.data.value) {
            if (elem.SupplierID == id) {
                //LO TENEMOS!!! 
                this.setState({ proveedor: elem })
                break;
            }
        }
    })
}

state = {
    suppliers: [], proveedor: null
}

loadSuppliers = () => {
    console.log("antes");
    axios.get(this.url).then((response) => {
        console.log("Leyendo...");
        this.setState({
            // data.value porque en la api tenemos el value. Si no estuviera, ponemos data solo
            suppliers: response.data.value
        })
    })
    console.log("despues");
}

componentDidMount = () => {
    this.loadSuppliers();
}

render() {
    return (
        <div>
            <h1>Service Api Suppliers</h1>
            <form>
                <label>Id Proveedor: </label>
                <input type="text" ref={this.cajaID} />
                <button onClick={this.findSupplier}>
                    Buscar
                </button>
            </form>
            {
                this.state.proveedor &&
                (<div>
                    <h2>Contact: {this.state.proveedor.ContactName}</h2>
                    <h2>Title: {this.state.proveedor.ContactTitle}</h2>
                    <h2>Dirección: {this.state.proveedor.Address}</h2>
                </div>)
            }
            <ul>
                {
                    this.state.suppliers.map((dato, index) => {
                        return (
                            <li key={index}>
                                Id: {dato.SupplierID},
                                Name: {dato.ContactName}
                            </li>)
                    })
                }
            </ul>
        </div>
    )
}
}
*/


/*// Mi ejercicio (funciona)

cajaID = React.createRef();

state = {
    suppliers: [],
    supplierBuscado: null,
    buscado: false
}

url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";

loadSuppliers = () => {
    axios.get(this.url).then((response) => {
        this.setState({
            // data.value porque en la api tenemos el value. Si no estuviera, ponemos data solo
            suppliers: response.data.value
        })
    })
}

componentDidMount = () => {
    this.loadSuppliers();
}

buscarID = () => {
    let id = parseInt(this.cajaID.current.value);
    let encontrado = this.state.suppliers.find((suministro) => suministro.SupplierID === id);
    this.setState({
        supplierBuscado: encontrado || null,
        buscado: true
    });
}

render() {
    return (
        <div>
            <h1>Suppliers</h1>
            <label>Introduce un ID: </label>
            <input type='number' ref={this.cajaID} />
            <button onClick={this.buscarID}>Buscar</button>
            {
                this.state.buscado && (
                    <div>
                        {this.state.supplierBuscado ? (
                            <div>
                                <p><strong>Compañía:</strong> {this.state.supplierBuscado.CompanyName}</p>
                                <p><strong>Contacto:</strong> {this.state.supplierBuscado.ContactName}</p>
                                <p><strong>Ciudad:</strong> {this.state.supplierBuscado.City}</p>
                            </div>
                        ) : (
                            <p style={{ color: 'red' }}>No se encontró ningún supplier con ese ID.</p>
                        )}
                    </div>
                )
            }
            <hr />
            <h2>Lista completa:</h2>
            {
                this.state.suppliers.map((suministros, index) => {
                    return (<li key={index} style={{ color: "#292828" }}>
                        <b>{suministros.CompanyName}</b> ({suministros.SupplierID})
                    </li>)
                })
            }
        </div>
    )
}
}
*/