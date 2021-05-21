import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodoListItem from './todoListItem'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemText from '@material-ui/core/ListItemText';
import './todoList.css';

const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  maxWidth: 360,
	},
	clearTodo: {
		margin: 20,
	},
}));

export default function ToDoList ({
	text,
	todoIdsArray,
	handleChange,
	handleSubmit,
	deleteAll,
}) {
	const classes = useStyles();

	return(
		<div>
			<br />
			<br />
			<div className="childOne">
				<Toolbar variant="dense">
					<input
						type="text"
						className="new-todo"
						placeholder="I have to.."
						value={text}
						onChange={handleChange}
					/>
					<Button variant="contained" color="secondary" onClick={handleSubmit}>
						<AddIcon />
					</Button>
				</Toolbar>
				<br />
				<br />
				{
					todoIdsArray.length > 0 ? 
					<List className={classes.root}>
						{
							todoIdsArray.map((todoId) => {
								return <TodoListItem key={todoId} id={todoId} />
							})
						}
					</List>
					:	<ListItemText id={`checkbox-list-label-0`} primary={"Nothing to do!"} className={classes.clearTodo} />
				}
			</div>
			<br />
			<br />
			<div className="childTwo">
				<Button className="delBtn" onClick={deleteAll}>
					<DeleteIcon />Delete All
				</Button>
			</div>
		</div>
	);
}
