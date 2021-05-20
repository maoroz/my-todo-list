import React from "react";
//import "./HomeStyle.css";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from '../../features/userSlice';

import ToDoList from '../../components/todoList/todoList';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Home = () => {

	const classes = useStyles();

	const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<ToDoList/>
        <Button 
          type="submit"
					fullWidth
					variant="contained"
					color="primary"
          className={classes.submit}
          onClick={(e) => handleLogout(e)}
        >
          Log out
        </Button>
			</div>
    </Container>
  );
}

export default Home;