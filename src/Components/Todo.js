import React, { useState } from 'react';
import './Todo.css';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Modal,
} from '@material-ui/core';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

import classes from '@material-ui/core';
import db from '../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

//

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  const strike = (event) => {
    event.target.classList.toggle('crossed-line');
  };
  const [list, setList] = useState([]);
  // function del(todos, setTodos) {
  //   list.splice(...todos, 1);
  //   setTodos({ list });
  // }

  return (
    <>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h1 className='heading'>Edit your TODO</h1>
            <form>
              <FormControl>
                <InputLabel>Write a TODO</InputLabel>
                <Input
                  placeholder={props.todo.todo}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
              </FormControl>
              <Button
                disabled={!input}
                size='small'
                type='submit'
                onClick={updateTodo}
                variant='contained'
                color='primary'>
                Update TODO
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
      <List className='todo_list'>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.orange}>TO</Avatar>
          </ListItemAvatar>
          <ListItemText
            onClick={strike}
            primary={props.todo.todo}
            secondary=''
          />
          <Button
            size='small'
            onClick={(event) =>
              db.collection('todos').doc(props.todo.id).delete()
            }
            type='submit'
            variant='contained'
            color='primary'>
            <DeleteForeverIcon>Delete</DeleteForeverIcon>
          </Button>
        </ListItem>

        <Button
          size='small'
          onClick={(e) => setOpen(true)}
          type='submit'
          variant='contained'
          color='primary'>
          <EditIcon></EditIcon>
          Edit
        </Button>
      </List>
    </>
  );
}

export default Todo;
