import { Component, createElement } from '../lib/react/index.js';
import Select from './select.js';

class Filters extends Component{
  render(){
    return Select({
      children: [
        createElement('option', { vlaue: 'all' }, 'Todas'),
        createElement('option', { vlaue: 'mostValued' }, 'Mas Valoradas'),
        createElement('option', { vlaue: 'leastValued' }, 'Menos Valoradas'),
      ]
    })
  }
}

export default Filters