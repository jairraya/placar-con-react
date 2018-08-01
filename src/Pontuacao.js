import React, { Component } from 'react';
import './Pontuacao.css';

class Pontuacao extends Component {
    constructor(props){
        super(props);
        this.time = "Time da casa";
    }

    atualizar = () => {
            this.prop.cliqueBotao(this.props.numero);
    }

    render() {
        if(this.props.visitante === "true"){
            this.time = "Time visitante";
        }

        return (
            <div className="pontuacao">
                <h1>{this.props.nomeDoTime || this.time}</h1>
                <h2>{this.state.gols}</h2>
                <div className="gol" onClick={this.atualizar}>
                    GOL!
                </div>
            </div>
        );
    }
}

export default Pontuacao;
