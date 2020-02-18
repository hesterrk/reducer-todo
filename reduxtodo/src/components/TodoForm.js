import React, { useContext } from 'react';
import { useToDoContext } from "../context/useToDoContext";
import moment from 'moment';
import styled from "styled-components";

const Input = styled.input `
border: 2px solid lavender;
border-radius: 2px;
margin-bottom: 10px;
margin-right: 5px;
`

const H2 = styled.h2 `
font-family: monospace;
font-size: 1rem;
color: lavender;
background: #AA076B;
width: 50%;
padding-top: 20px;
padding-bottom: 20px;
border-radius: 5px;

`

const Span = styled.span `
display: flex;
justify-content: center;
margin-bottom: 10px;
`



export default function ToDoForm() {

  const { handleChanges, handleSubmit, state, dispatch, isComplete } = useContext(useToDoContext)
    
    return (

<div>
<form onSubmit={handleSubmit}>
<Input
 type="text"
 name="newTask"
 value={state.newTask}
 onChange={handleChanges}
 />
 
 <button> Add Task </button>
</form>

<br></br>
<br></br>


<Span>
<H2>Tasks </H2> </Span>

{/* //DISPLAYING MY TASKS: send this down to another component */}
{/* //moment: showing when it was added in relative time */}
{
state.myList.map(it => (
 <div
   key={it.id}
     >
       

   {it.item}
   <br>
   </br>
   Time made: {moment(it.id).fromNow()} <br>
   </br>
    <br></br>
   <button onClick={()=>{ isComplete(it.id)}}
  type="submit" >Complete?
</button>

<button onClick={() => dispatch({ type: 'CLEAR_COMPLETED'})}>Clear Task </button>

</div>
   
))
}
</div>

    );
}

