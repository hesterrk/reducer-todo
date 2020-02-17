import React, { useState, useReducer } from 'react';
import './App.css';
import { initialState, toDoReducer } from "./reducers/todoReducer";

function App() {

  //Use our todoreducer hook here, need to import it 
  //if we want our input field: [newTitleText] = useState(state.title) = keeps track of all updates

  const [newTaskText, setNewTaskText] = useState('')
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  const handleChanges = e => {
    setNewTaskText(e.target.value)
}


  return (
    <div className="App">
      


      <input
       type="text"
       name="newTaskText"
       value={newTaskText}
       onChange={handleChanges}
       />
       <button> Add Task </button>
      
    </div>
  );
}

export default App;
