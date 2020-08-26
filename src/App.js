import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
import Nav from './Components/Nav';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Components/Todo';
import db from './firebase';
import firebase from 'firebase';
import Login from './Components/Login';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    // this one is used to connect to the firestore
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data().todo));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);
  // function to addTodo to the list/array   x
  const addTodo = (event) => {
    event.preventDefault();
    // ... used to  append on the existing
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setInput(''); // clears the input box as soon the enter is hit
  };
  return (
    <>
      <div className='app'>
        <Nav />
        <form>
          <FormControl>
            <InputLabel>Write a TODO</InputLabel>
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </FormControl>
          <Button
            disabled={!input}
            size='small'
            type='submit'
            onClick={addTodo}
            variant='contained'
            color='primary'>
            Add TODO
          </Button>
        </form>
        <h6>Note : Just click on the todo you have completed to strike-out</h6>
        <ol>
          {/* todo is the member of todos  */}
          {todos.map((todo) => (
            <Todo todo={todo} />

            // <li>{todo}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
