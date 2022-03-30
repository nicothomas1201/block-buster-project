function createStore(reducer, initialState){
  let state = initialState
  let upadater = () => {}
  const getState = () => state

  const dispatch = (action) =>{
    state = reducer(state, action)
    upadater()
  }

  const subscribe = (listener) =>{
    upadater = listener
  }

  return {
    getState,
    dispatch,
    subscribe,
  }
}

export { createStore }