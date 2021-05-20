import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import TodoListItem from './todoListItem'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import './todoList.css';

import { fetchTodos } from '../../features/todoSlice';

const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  maxWidth: 360,
	  //backgroundColor: theme.palette.background.paper,
	},
}));

const selectTodoIds = (state) => state.todos.map((todo) => todo.id)
// import { useSelector, useDispatch } from 'react-redux';
// import { selectTodo, addTodo, deleteTodo, fetchTodos } from '../../features/todoSlice';

const ToDoList = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	dispatch(fetchTodos);

	const todoIds = useSelector(selectTodoIds, shallowEqual);
	
	const [item, setItem] = useState("");
	const [newItem, setNewItem] = useState([]);
	
	// const dispatch = useDispatch();

	const firstEvent = (event) => {
		setItem(event.target.value);
	}
	
	const secondEvent = () => {
		
		//dispatch(addTodo(item));
		
		setItem("");
		
	}
	
	const thirdEvent = () => {
		//dispatch(deleteTodo());
	}

	return(
		<div>
			<br />
			<br />
			<div className="childOne">
				<input type="text" value={item} placeholder="I have to.." onChange={firstEvent} />
				<Button className="AddBtn" onClick={secondEvent}>
					<AddIcon />
				</Button>
				<br />
				<br />
				<List className={classes.root}>
					{/*<ul className="todo-list">*/}
						{
							todoIds.map((todoId) => {
								return <TodoListItem key={todoId} id={todoId} />
							})
						}
					{/*</ul>*/}
				</List>
			</div>
			<br />
			<br />
			<div className="childTwo">
				<Button className="delBtn" onClick={thirdEvent}>
					<DeleteIcon />Delete All
				</Button>
			</div>
		</div>
	);
}


export default ToDoList;