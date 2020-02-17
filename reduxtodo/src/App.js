import React, {useReducer } from 'react';
import './App.css';
import { initialState, toDoReducer } from "./reducers/todoReducer";
import ToDoForm from "./components/TodoForm";
import { useToDoContext } from "./context/useToDoContext";



function App() {

  //Use our todoreducer hook here, need to import it 
  //if we want our input field: [newTitleText] = useState(state.title) = keeps track of all updates

  const [state, dispatch] = useReducer(toDoReducer, initialState);

  //filling in a new task
  const handleChanges = e => {
    const inputName = e.target.name
    const inputValue = e.target.value
    console.log(e.target.value)
    dispatch({ type: 'INPUT_CHANGE', payload:  {inputName, inputValue}  })
  

}

//adding new task button


const handleSubmit = e => {
  e.preventDefault();
  const newItem = {
    item: state.newTask ,
    completed: false,
    id: Date.now(),
    
    
  }
  console.log(newItem);
  dispatch({type: 'ADD_ITEM', payload: newItem})

}

//toggling item 

const isComplete = id => {
  dispatch({ type: 'TOGGLE_COMPLETED', payload: id})

};

// const clearCompleted = e =>
// e.preventDefault();
// dispatch({ type: 'CLEAR_COMPLETED'})


  return (
    <div className="App">
    
    {/* <form onSubmit={handleSubmit}>
      <input
       type="text"
       name="newTask"
       value={state.newTask}
       onChange={handleChanges}
       />
       
       <button> Add Task </button>
      </form>

      <br></br>
      <br></br>

      <h2>My Tasks: </h2>
     
      
     {/* //DISPLAYING MY TASKS: send this down to another component */}
     {/* {
     state.myList.map(it => (
       <div
         key={it.id}
           >
         {it.item}  <br></br>
         <button onClick={()=>{ isComplete(it.id)}}
        type="submit" >Complete?
    </button>

    <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED'})}>Clear Task </button>

 
    </div>
         
  ))
}  */}


<useToDoContext.Provider value ={{handleChanges, handleSubmit, state, dispatch, isComplete}}>
<ToDoForm
    // handleChanges={handleChanges}
    // handleSubmit={handleSubmit}
    // state={state}
    // dispatch={dispatch}
    // isComplete={isComplete}
    />
    </useToDoContext.Provider>


</div>

);
}
export default App;
