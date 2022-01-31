let initState = {
    count: 0,
}

export const reducer = (state=initState, action) => {
    switch(action.type){
        case ActionType.INCREASE_COUNT : 
      return{count: state.count +1}
      case ActionType.DECREASE_COUNT : 
      return{count: state.count +1}

 default:   
return state
    }
}