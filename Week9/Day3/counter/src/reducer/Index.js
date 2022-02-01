let initState = {
    counter: 0,
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