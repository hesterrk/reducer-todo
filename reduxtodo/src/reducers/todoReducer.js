

// My initial state object:  a list of todos 

export const initialState = 
{
   item: 'Learn about reducers',
completed: false,
   id: 3892987589
 }


 export const toDoReducer = (state, action) => {
    switch(action.type) {
        // case '' :
        //     return {

        //     };

            default:
        
        return state
    };
    

 }

//Going to have a case where we build a new array for our todos: find which one we clicked on and toggle its editing state
//can do the same for filter() "FILTER_TODOS"
//adding: use spread operator: todos: [...state.todo, newToDo] or could be action.payload 

// case "TOGGLE_TODO"
// return {
   // todos: state.todos.map()


// }

// case "ADD_TODO"
// const newToDo
// return {
   // todos: state.todos.map()
// }