import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { logout } from '../../features/userSlice';
import ToDoContainer from '../../components/todoList/todoListContainer';

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

  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<ToDoContainer/>
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
