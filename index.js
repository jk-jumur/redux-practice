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


//MULTIPLE REDUCERS

//product 
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

//product state

const initialProductState = {
       products: ["suger", "salt"],
       numberofProducts : 2,
}


//product actions

const  getProducts = () => {
         return {
            type : GET_PRODUCTS,
         }
}


const addProducts = (product) => {
       
     return {
            
          type : ADD_PRODUCTS,
          payload : product,
     }
}

//productReducer

const productReducer = (state = initialProductState, action) => {
       
     switch(action.type) {
           case GET_PRODUCTS :

           return {
                 ...state,
           };

           case ADD_PRODUCTS : 

            return {
                 
               products : [...state.products, action.payload],
               numberofProducts : state.numberofProducts  + 1,
            };

            default : state;
     }
}

// product store

const store1 = createStore(productReducer);
store1.subscribe(() => {
       console.log(store1.getState());
})

store1.dispatch(getProducts());
store1.dispatch(addProducts("rice"));


// Cart items
  
  const GET_CART_ITEMS = 'GET_CART_ITEMS';
  const ADD_CART_ITEMS = 'ADD_CART_ITEMS';

//cart state

  const initialCartState = {
       
     cartItems : ["sugar", "salt"],
     numberofCartItems : 2,

  }

  //cart actions

  const getCartItems = () => {
       return {
            
          type : GET_CART_ITEMS,
       }
  }

  const addCartItems = (item) => {
       
     return {
           
          type : ADD_CART_ITEMS,
          payload : item, 
     }
  }

//cart reducer

  const cartReducer = (state = initialCartState, action) => {
       
     switch(action.type) {
            
          case GET_CART_ITEMS : 
           
          return {
                ...state,
          };

          case ADD_CART_ITEMS : 
           return {
               cartItems : [...state.cartItems, action.payload],
                numberofCartItems : state.numberofCartItems + 1,
           }

           default :
           state;
     }
  }



//cart store

 const store2 = createStore(cartReducer);
   store2.subscribe(() => {
       console.log(store2.getState());
   })

  store2.dispatch(getCartItems()); 
  store2.dispatch(addCartItems("nachos"));
  store2.dispatch(addCartItems("ramen"));