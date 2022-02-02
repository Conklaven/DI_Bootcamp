let initState = {
    array: [],
    txt: '',
    }

export const reducer = (state=initState, action) => {
    switch(action.type){
        case 'ARRAY' : 
      return{...state, array: action.payload}
      case 'TEXT' : 
      return{...state, txt: action.payload}
      

 default:   
return{...state}
    }
}