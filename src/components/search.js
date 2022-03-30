import { Component, createElement } from '../lib/react/index.js'
import Form from './form.js'
import Input from './input.js'
import Button from './button.js'

class Search extends Component{
  render(){
    return Form({
      children: [
        new Input({
          placeholder: 'Escribe tu pelicula favorita',
          name: 'title',
          type: 'text'
        }),
        new Button({}, 'Buscar')
      ]
    })
  }
}

export default Search