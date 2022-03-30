import { createStore } from "./redux/index.js"
import { reducer } from "./reducers/index.js"
import movies from "./movies.js"
import {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValueIds,
} from './normalize.js'


const intialState = {
  movieList: movieListAsMap(movies),
  filter: 'all',  
  list: {
    all: getAllIds(movies),
    mostValued: getMostValuedIds(movies),
    leastValued: getLeastValueIds(movies),
  }
}

const store = createStore(reducer, intialState)    

export default store