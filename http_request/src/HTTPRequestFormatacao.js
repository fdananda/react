import React, {Component} from 'react'
import './HTTPRequestFormatacao.css';

class HTTPRequestFormatacao extends Component{

  render(){
    return(
        <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.props.data}</p>
        <p><a href={this.props.link} target="_blank">{this.props.link}</a></p>
        </div>
      )
  }
}

export default HTTPRequestFormatacao;
