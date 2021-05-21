import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import ToDoList from './todoList';
import './todoList.css';

const selectTodoIds = (state) => state.todos.map((todo) => todo.id)

const ToDoContainer = () => {
	const dispatch = useDispatch();

	const todoIds = useSelector(selectTodoIds, shallowEqual);

	const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
	
	const handleSubmit = (e) => {
		if (text === '') {
			alert('Please, complete the field.');
			return null;
		}

		let maxId = 1;
		todoIds.forEach(id => {
			if (id >= maxId) {
				maxId = maxId > id ? id : id+1;
			}
		});

    const trimmedText = text.trim();
    if (trimmedText) {
			dispatch({ type: 'todos/todoAdded', payload: {
				userId: 1,
				id: maxId,
				title: text,
				completed: false,
			}});
      setText('');
    }
  }
	
	const deleteAll = () => {
		dispatch({type: 'todos/deleteAll'});
	}

	return(
		<ToDoList
            text={text}
            todoIdsArray={todoIds}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            deleteAll={deleteAll}
        />
	);
}


export default ToDoContainer;