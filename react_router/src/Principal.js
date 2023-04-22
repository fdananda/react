import React, {Component} from 'react'
import {Routes, Route, NavLink, HashRouter} from 'react-router-dom'
import View1 from './View1'
import View2 from './View2'
import View3 from './View3'


class Principal extends Component{
  render(){
    return(
      <>
    <div className="helloContainer">
    <h1>React Router</h1>
    <p>O React Router permite rotear do lado cliente. Com isso, o aplicativo atualiza a URL de um clique no link sem fazer outra solicitação para outro documento do servidor e permite gerar sites de uma página. Passos para utilização:</p>
      <ul className="lista">
        <li key="passo1">Ir até a pasta do projeto (usar cd nomedapasta)</li>
        <li>npm i react-router-dom --save</li>
        <li>No arquivo de component importar a biblioteca.</li>
        <li>No arquivo de component importar os arquivos que serão apresentados na página:"import View1 from './View1'"</li>
      </ul>

      <p class="referencia">Referência: <a href="https://reactrouter.com/en/main" target="_blank">React Router</a></p>

    </div>

      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/">View1</NavLink></li>
            <li><NavLink to="/view2">View2</NavLink></li>
            <li><NavLink to="/view3">View3</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
          <Route exact path="/" element={<View1 />} />
          <Route path="/view2" element={<View2 />} />
          <Route path="/view3" element={<View3 />} />
          </Routes>
          </div>
        </div>
      </HashRouter>
      </>
    )
  }
}

export default Principal