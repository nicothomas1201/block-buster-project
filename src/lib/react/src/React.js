class Component {
  constructor( props = {}, state = {} ){
    this.props = props
    this.state = state
  }

  update(){

  }

  //se llama antes de que renderice el componente
  componentWillMount(){

  }

  //se llama cuando el componente ya se renderizo
  componentDidMount(){

  }

  //se llama cuando el componente se actualizo
  componentDidUpdate(){

  }

  #updater(  ){
    this.update(this.render())
    this.componentDidUpdate()
  }
  
  setState( newState ){
    this.state = {
      ...this.state, 
      ...newState, 
    }
    this.#updater()
  }

  build(){
    this.componentWillMount()
    return this.render()
  }
}

export {
  Component, 
}