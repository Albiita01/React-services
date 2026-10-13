import React, { Component } from 'react'

export default class CollatzComponent extends Component {

    generarCollatz = () => {
        let aux = [];
        let num = parseInt(this.props.numero);
        while (num != 1) {
            if (num % 2 == 0) {
                num = num / 2;
            } else {
                num = num * 3 + 1;
            }
            aux.push(num);

            this.setState({
                collatz: aux
            })
        }
    }

    componentDidMount = () => {
        this.generarCollatz();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.numero != this.props.numero) {
            this.generarCollatz();
        }
    }

    state = {
        collatz: []
    }

    render() {
        return (
            <div>
                <h1>Collatz</h1>
                <h3 style={{ color: "blue" }}>Número: {this.props.numero}</h3>
                <ul className='list-group'>
                    {
                        this.state.collatz.map((num, index) => {
                            return (<li key={index} className='list-group-item'>{num}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
