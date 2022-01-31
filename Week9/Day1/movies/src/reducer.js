let initState = {
    message: "text one two",
    aaa: "Hi Fima",
    bbb: "you done right"
}

export const reducer = (state=initState, action) => {
    switch(action.type){
        case 'PROP_ONE' : 
      return{...state, aaa:  action.payload}

    case 'PROP_TWO' :
    return{...state, bbb: action.payload}

 default:   
return{...state}
    }
}