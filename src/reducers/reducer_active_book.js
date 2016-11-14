//State argument is not application state, only the state
//this reducer is responsible for
export default function(state = null , action) { //If state argument comes in undefined, set it to null
  switch(action.type) {
    case 'BOOK_SELECTED': return action.payload;
  }
  return state;
}
//Never mutate the state inside the reducer, just return fresh object
