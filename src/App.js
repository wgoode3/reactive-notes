import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';
import AllNotes from './Components/AllNotes';
import NewNote from './Components/NewNote';


function App() {

  const [notes, setNotes] = useState([]);

  useEffect( () => {
    const notesFromSession = localStorage.getItem("notes");
    if(notesFromSession) {
      console.log(notesFromSession);
      setNotes(notesFromSession.split(","));
    }
  }, []);

  const AddNote = note => {
    setNotes([...notes, note]);
  }
  
  useEffect( () => {
    localStorage.setItem("notes", notes);
  }, [notes]);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Notes</h1>
      </div>
      <Link className="btn btn-outline-info" to="/">View All Notes</Link>
      <Link className="btn btn-outline-info" to="/new">Add Note</Link>
      <Router>
        <AllNotes notes={notes} path="/" />
        <NewNote AddNote={AddNote} path="/new" />
      </Router>
    </div>
  );
}

export default App;
