
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state

const initialCounterState = {
     count : 0
}

const initialUsersState = {
     users : [
         {name: "JK"}
     ]
}

// action - object - type, payload
//  INCREMENT COUNTER

const incrementCounter = () => {
     return {
         type: INCREMENT,
     }
}
// DECREMENT COUNTER
const decrementCounter = () => {
      return {
          type : DECREMENT,
      }
}

const addUser = () => {
    return {
         type : ADD_USER,
         payload : {name: "JK"},
    }
}

//state 
//dispatch action
//reducer
//store