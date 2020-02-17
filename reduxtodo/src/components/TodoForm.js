import React, { useContext } from 'react';
import { useToDoContext } from "../context/useToDoContext";

export default function ToDoForm(props) {

  const { handleChanges, handleSubmit, state, dispatch, isComplete } = useContext(useToDoContext)
    
    return (

<div>
<form onSubmit={handleSubmit}>
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
{
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
}
</div>

    )
}