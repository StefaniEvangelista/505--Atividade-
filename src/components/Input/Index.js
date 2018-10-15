import React from 'react';
import Estilo from '../../Estilo/Estilo';


class Input extends React.Component{
    render(){
        return(
            <input style={Estilo.Caixinhas} onChange={this.props.atualizar} value={this.props.valor} 
            name={this.props.name} type={this.props.tipo} placeholder={this.props.placeholder}></input>
        );
    }
}

export default Input;