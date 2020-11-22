import { combineReducers } from 'redux'

import filmsListReducer from '../store/features/FilmsListSlice'

const rootReducer = combineReducers({
  films: filmsListReducer
})

export default rootReducer