import React, { useState } from 'react';
import { navigate } from '@reach/router';


const NewNote = props => {

  const [note, setNote] = useState("");

  const Create = e => {
    e.preventDefault();
    let test = note.replace(",", "&#44;");
    props.AddNote(test);
    navigate("/");
    // let thing = "planets";
    // let id = 7;
    // navigate(`/${note}/${id}`);
  }

  return (
    <>
      <h2 className="mt-5">New Note</h2>
      <form onSubmit={ Create }>
        <div className="form-group">
          <textarea 
            className="form-control"
            placeholder="Your Note Here"
            autoFocus
            onChange={e => setNote(e.target.value)}
          >
          </textarea>
        </div>
        <input type="submit" className="btn btn-info" value="Create Note" />
      </form>
    </>
  );

}

export default NewNote;