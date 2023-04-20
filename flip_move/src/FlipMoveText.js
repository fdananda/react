import React, {Component} from 'react';
import "./FlipMoveText.css"
import FlipMove from 'react-flip-move'

class FlipMoveText extends Component{

	constructor(props){
    super(props)

    this.delete = this.delete.bind(this)
  }


	 delete(key){
    	this.props.delete(key)
 	 }


	render(){
	return(
		<div className="helloContainer">
		<h1>React Flip Move</h1>
		<p>Criado para animar uma lista de itens quando a ordem da lista muda. Passos para utilização:</p>
			<ul className="lista">
			<FlipMove enterAnimation="fade" leaveAnimation="fade">
				<li key="passo1">Ir até a pasta do projeto (usar cd nomedapasta)</li>
				<li>npm i -S react-flip-move no prompt de comando</li>
				<li>No arquivo de component importar a biblioteca: "import FlipMove from 'react-flip-move'"</li>
				<li>Utilizar a lista entre comandos de FlipMove</li>
			</FlipMove>	
			</ul>

			<p class="referencia">Referência: <a href="https://www.npmjs.com/package/react-flip-move" target="_blank">npm</a></p>

		</div>
		)
	}
}

export default FlipMoveText