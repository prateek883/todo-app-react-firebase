import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState(['abc','def']);
  const [input, setInput] = useState('');

  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed.
  useEffect(() => {
    //this code here..fires when the app.js loads
    db.collection("todos").orderBy('timestamp','desc').onSnapshot(snapshot => {
       console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    })
  }, []);
  

  const addTodo = (event) => {
    //this wil fire off when we click the button
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput(''); //clear up the input after clicking add todo button

  }



  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form>

        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>



      <Button disabled={!input} type="submit" variant="contained" onClick={addTodo} color="primary">Add Todo</Button>
      </form>


      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
