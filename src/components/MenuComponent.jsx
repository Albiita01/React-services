import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuComponent extends Component {
    render() {
        return (
            <div style={{ marginBottom: "20px" }}>
                <NavLink to='/'>Home</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to='tabla/20'>Tabla multiplicar (20)</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to='tabla/22'>Tabla multiplicar (22)</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to='tabla/33'>Tabla multiplicar (33)</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
                <NavLink to='collatz/20'>Collatz</NavLink>
            </div>
        )
    }
}
