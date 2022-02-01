let initState = {
    counter: 20,
    }

export const reducer = (state=initState, action) => {
    switch(action.type){
        case 'INCREMENT' : 
      return{...state, counter: action.payload}
      case 'DECREMENT' : 
      return{...state, counter: action.payload}

 default:   
return{...state}
    }
}