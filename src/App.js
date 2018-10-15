import React from 'react';
import Input from './components/Input/Index'
import Estilo from './Estilo/Estilo';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      valor: '',
      quantidade: ''
    }
  }
  
  atualizarInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  enviarDados = () => {
    let dados = {
      nome: this.state.name,
      quantidade: this.state.quantidade,
      marca: this.state.valor
    }
    fetch('http://localhost:5000/produto/novo', { 
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados)
  }).then().then().catch();
}

componentDidMount(){
  fetch('http://localhost:5000/produtos', {
  method: "GET"
}).then( 
  resposta => resposta.json()
).then(
  dados => {
    let lista = []
    for (let meal of dados.meals){
      lista.push(meal.strMeal);
    }
    this.setState({
      registros: lista
    });
  }
).catch(erro => console.log(`ERRO: ${erro}`));
}

render() {
  console.table(this.state);
  return (
    <div style={Estilo.Fundo} >
    <Input style={Estilo.Caixinhas} valor={this.state.name} atualizar={this.atualizarInput} name="name" tipo="text" placeholder="Nome" /> 
    <Input style={Estilo.Caixinhas}  valor={this.state.valor} atualizar={this.atualizarInput} name="valor" tipo="text" placeholder="Valor" /> 
    <Input style={Estilo.Caixinhas}  valor={this.state.quantidade} atualizar={this.atualizarInput} name="quantidade" tipo="text" placeholder="Marca" /> 
    <button style={Estilo.Button} onClick={this.enviarDados}>Enviar</button>
    </div>
  );
}
}

export default App;
