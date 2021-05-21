import axios from 'axios';

const initialState = []
let howMuchData = 5;

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      howMuchData = howMuchData + 1;
      return [...state, action.payload];
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'todos/todoDeleted': {
      howMuchData = howMuchData - 1;
      return state.filter((todo) => todo.id !== action.payload);;
    }
    case 'todos/deleteAll': {
      return initialState;
    }
    case 'todos/todosLoaded': {
      return action.payload ? action.payload : state
    }
    default:
      return state
  }
};

export async function fetchTodos(dispatch, getState) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  const data = response.data.slice(0, howMuchData);
  dispatch({ type: 'todos/todosLoaded', payload: data });
};
