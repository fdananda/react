import React, {Component} from 'react';
import "./ReactAmbiente.css"

class ReactAmbiente extends Component{
	render(){
	return(
		<div className="helloContainer">
		<h1>Ambiente React</h1>
		<p>Abaixo estão descritos os passos para a configuração do ambiente React de produção</p>
			<ul>
				<li>Instalar Node.js</li>
				<li>npm install -g create-react-app</li>
				<li>Ir até a pasta (usar cd nomedapasta)</li>
				<li>create-react-app nomedoapp</li>
				<li>cd nomedoapp</li>
				<li>npm start</li>
				<li>Ctrl + C para finalizar o npm</li>
				<li>npm run build (ciar o ambiente de lançamento)</li>
				<li>Excluir os arquivos das pastas src e public</li>
				<li>Na pasta public, criar o arquivo index.html </li>
				<li>Na pasta src, criar os arquivos index.js, index.css, ArquivoDeClasse.js, AquivoDeClasse.css </li>
			</ul>

			<p class="referencia">Referência: <a href="https://www.w3schools.com/react/react_getstarted.asp" target="_blank">w3schools</a></p>

		</div>
		)
	}
}

export default ReactAmbiente