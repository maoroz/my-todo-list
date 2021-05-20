import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { ReactComponent as TimesSolid } from './times-solid.svg';

import { availableColors, capitalize } from './colors';

const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId)
}

// Destructure `props.id`, since we just need the ID value
const TodoListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  const todo = useSelector((state) => selectTodoById(state, id));

  const { title, completed, color } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id })
  }

  const handleColorChanged = (e) => {
    const color = e.target.value
    dispatch({
      type: 'todos/colorSelected',
      payload: { todoId: todo.id, color },
    })
  }

  const onDelete = () => {
    dispatch({ type: 'todos/todoDeleted', payload: todo.id })
  }

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <ListItem key={id} role={undefined} dense button onClick={handleCompletedChanged}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={completed}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': `checkbox-list-label-${id}` }}
        />
      </ListItemIcon>
      <ListItemText id={`checkbox-list-label-${id}`} primary={title} />
      <ListItemSecondaryAction>
          {/* <Button  onClick={onDelete}>
            <DeleteIcon />
          </Button> */}
          <IconButton aria-label="delete" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    // <li>
    //   <div className="view">
    //     <div className="segment label">
    //       <input
    //         className="toggle"
    //         type="checkbox"
    //         checked={completed}
    //         onChange={handleCompletedChanged}
    //       />
    //       <div className="todo-text">{title}</div>
    //     </div>
    //     <div className="segment buttons">
    //       <select
    //         className="colorPicker"
    //         value={color}
    //         style={{ color }}
    //         onChange={handleColorChanged}
    //       >
    //         <option value=""></option>
    //         {colorOptions}
    //       </select>
    //       <button className="destroy" onClick={onDelete}>
    //         <TimesSolid />
    //       </button>
    //     </div>
    //   </div>
    // </li>
  )
}

export default TodoListItem
