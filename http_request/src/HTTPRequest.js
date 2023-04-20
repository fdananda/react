import React, {Component} from 'react'
import HTTPRequestFormatacao from './HTTPRequestFormatacao';

var xhr

class HTTPRequest extends Component{
  constructor(props){
    super(props)

    this.state = {
      string_titulo: "",
      string_data: "",
      string_link: "",
    }

    this.processRequest = this.processRequest.bind(this)
  }

  componentDidMount(){
    xhr = new XMLHttpRequest()
    xhr.open("GET", "https://www.soccerincanada.ca/wp-json/wp/v2/posts/1822/", true)
    xhr.send()

    xhr.addEventListener("readystatechange", this.processRequest, false)
  }

  processRequest(){

   console.log(xhr.responseText)

    if(xhr.readyState === 4 && xhr.status === 200){
      var response = JSON.parse (xhr.responseText)

      this.setState({
        string_retorno: response.title.rendered,
        string_data: response.date,
        string_link: response.link,
      })
    }
  }

  render(){
    return(
        <HTTPRequestFormatacao 
        titulo={this.state.string_retorno} 
        data={this.state.string_data} 
        link={this.state.string_link}/>
      )
  }
}

export default HTTPRequest;
