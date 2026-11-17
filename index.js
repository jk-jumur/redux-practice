// const {createStore} = require("redux");

// // defining constants
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const ADD_USER = "ADD_USER";

// // state

// const initialCounterState = {
//      count : 0
// }

// const initialUsersState = {
//      users : [
//          {name: "JK"}
//      ]
// }

// // action - object - type, payload
// //  INCREMENT COUNTER

// const incrementCounter = () => {
//      return {
//          type: INCREMENT,
//      }
// }
// // DECREMENT COUNTER
// const decrementCounter = () => {
//       return {
//           type : DECREMENT,
//       }
// }

// const addUser = () => {
//     return {
//          type : ADD_USER,
//          payload : {name: "JK"},
//     }
// }

// //state 
// //dispatch action
// //reducer
// //store->
// //   i. getState()
// //   ii. dispatch()
// //   iii. subscribe()

// // create reducer for counter
//   const counterReducer = (state=initialCounterState, action) => {
//        switch (action.type){
//           case INCREMENT:
//                return{
//                 ...state, 
//                  count: state.count + 1,
//                }
//           //

//           case DECREMENT:
//              return {
//                   ...state,
//                   count : state.count - 1,
//              }
//           //
         
//           default :
//           state;
             
//        }
    
//   }

//   //create store

//   const store = createStore(counterReducer);

//   store.subscribe(() => {
//      console.log(store.getState());
//   })

//   //dispatch action
//   store.dispatch(incrementCounter());
//   store.dispatch(incrementCounter());
//   store.dispatch(incrementCounter());

//   store.dispatch(decrementCounter());
//   store.dispatch(decrementCounter());


  //complete counter app

  // state--count:0
  //action - increment, decrement, reset
  //reducer
  //store

  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';
  const RESET = 'RESET';
  const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
  const ADD_USER = 'ADD_USER';
  const { createStore } = require('redux');

  

  const initialState = {
       users : ["JK"],
       count : 1,
  }

const incrementCounterAction = () => {
     return {
           type : INCREMENT,
     };
}
  
const decrementCounterAction = () => {
       return {
            type : DECREMENT,
       };
}

const resetCounterAction = () => {
       return {
           type : RESET,
       };
}

const incrementCounterByValue = (value) => {
       return {
            type: INCREMENT_BY_VALUE,
            payload: value ,
       };
}

const addUserAction = (user) => {
       return {
            type : ADD_USER,
            payload : user,
       }
}

//CREATING REDUCER

const counterReducer = (state=initialState , action) => {
      
     switch(action.type) {
            case INCREMENT :

              return {
                ...state,
                  count : state.count + 1,
              };

              case DECREMENT : 

                 return{
                     ...state,
                     count : state.count -1,
                 };

                 case RESET : 

                   return {
                      ...state,
                      count : 0,
                   };

                   case INCREMENT_BY_VALUE : 
                      
                      return { 
                           ...state,
                           count : state.count + action.payload,
                      };

                      case ADD_USER : 

                      return {
                           
                            users : [...state.users, action.payload],
                            count : state.count + 1,
                      }

            default : 
            state;
            
     }
}

//CREATE STORE
const store = createStore(counterReducer);

  store.subscribe(() => {
     console.log(store.getState());
  })

//   store.dispatch(incrementCounterAction());
//   store.dispatch(incrementCounterAction());
//   store.dispatch(incrementCounterAction());
//   store.dispatch(decrementCounterAction());
//   store.dispatch(resetCounterAction());

//   store.dispatch(incrementCounterAction());
//   store.dispatch(incrementCounterByValue(6));

store.dispatch(addUserAction("Jumur"));
store.dispatch(addUserAction("Khusbu"));
  
