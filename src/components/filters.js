import { Component, createElement } from '../lib/react/index.js';
import Select from './select.js';
import store from '../store.js';
import { SET_FILTER } from '../actions/index.js';

class Filters extends Component{
  handleChange = ( event ) => {
    store.dispatch({
      type: SET_FILTER,
      payload: event.target.value,
    })
  }
  render(){
    return Select({
      onChange: this.handleChange,
      children: [
        createElement('option', { value: 'all' }, 'Todas'),
        createElement('option', { value: 'mostValued' }, 'Mas Valoradas'),
        createElement('option', { value: 'leastValued' }, 'Menos Valoradas'),
      ]
    })
  }
}

export default Filters