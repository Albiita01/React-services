import React, { Component } from 'react'
import TablaMultiplicar from './components/TablaMultiplicar'
import NotFound from './components/NotFound'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import CollatzComponent from './components/CollatzComponent';
import MenuComponent from './components/MenuComponent';

export default class Router extends Component {

    render() {

        // Para hacer la tabla de multiplicar
        function TablaMultiplicarElement() {
            // Esta función será para capturar los parámetros de path y enviarlos al component mediante props
            let { minumero } = useParams();
            // Devolvemos el component con props
            return (<TablaMultiplicar numero={minumero} />)
        }

        // Para hacer el Collatz
        function CollatzElement() {
            let { minumero } = useParams();
            return (<CollatzComponent numero={minumero} />)
        }

        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />} />
                    <Route path="/collatz/:minumero" element={<CollatzElement />} />
                    {/** Para el error 404 siempre el último y asterisco en el path */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
