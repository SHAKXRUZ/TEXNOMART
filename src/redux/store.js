import { createStore } from 'redux'
import { combined } from './combineReducer'
const store = createStore(combined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export { store }