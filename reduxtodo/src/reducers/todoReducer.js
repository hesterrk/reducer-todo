

// My initial state object:  a list of todos 

export const initialState = {
  
   myList : [
//      {
//    item: 'Learn about reducers',
//    completed: false,
//     id: 3892987589
 
//   },
//   {
//    item: 'React',
//    completed: true,
//     id: 3862987589
 
//   }
], 

  newTask: ''
  
 
 }
 console.log(initialState.myList.id)


 const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
 const ADD_ITEM = 'ADD_ITEM'
 const INPUT_CHANGE = 'INPUT_CHANGE';
 const CLEAR_COMPLETED = 'CLEAR_COMPLETED';


 export const toDoReducer = (state, action) => {
    switch(action.type) {
        case TOGGLE_COMPLETED :
            return {
               ...state,
              myList: state.myList.map(item => {
               const itemId = action.payload;
               if(item.id === itemId){
                  return {
                     ...item, completed: !item.completed}
               } 
                  return item
            
      
            })
         };

            case ADD_ITEM :
                  const newItem = action.payload 
               return {
                 ...state, 
                 newTask: '',
                 myList: [...state.myList, newItem]
               };

               case INPUT_CHANGE :
                  const {  inputName, inputValue } = action.payload
                  return {
                     ...state, 
                   [inputName]: inputValue

                  

                  };

                  case CLEAR_COMPLETED :
                     return {
                        ...state, 
                        myList: state.myList.filter(item => 
                           !item.completed)
                     }

               
            default:
        
        return state
    };
    

 }


