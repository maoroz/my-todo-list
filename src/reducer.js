import { combineReducers } from 'redux'

import todosReducer from './features/todoSlice'
import userReducer from './features/userSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  user: userReducer,
  todos: todosReducer,
});

export default rootReducer;
