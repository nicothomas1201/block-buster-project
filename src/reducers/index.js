import { ADD_MOVIES, SET_FILTER } from "../actions/index.js"
import { 
  movieListAsMap,
  getAllIds,
  getLeastValueIds,
  getMostValuedIds,
 } from "../normalize.js"

export function reducer(state, { type, payload }){
  switch(type){
    case ADD_MOVIES: {  
      const movieList = movieListAsMap(payload, state.movieList)
      const all = getAllIds(payload, state.list.all)
      const leastValued = getLeastValueIds(payload, state.list.leastValued)
      const mostValued = getMostValuedIds(payload, state.list.mostValued)
      return {
        ...state,
        movieList,
        list: {
          ...state.list, 
          all,
          leastValued,
          mostValued,
        }
      } 
    }
    case SET_FILTER: 
      return {
        ...state, 
        filter: payload,
      }
    default: 
      return state
  }
}