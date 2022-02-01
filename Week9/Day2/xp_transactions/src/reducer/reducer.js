let initState = {
    accountNumber: '',
      fsc: "",
      name: '',
      amount : null
    }

export const reducer = (state=initState, action) => {
    switch(action.type){
        case 'INSERT' : 
      return{...state, accountNumber: action.payload.accountNumber, amount: action.payload.amount, name:action.payload.name}
      case 'UPDATE' : 
      return{...state, accountNumber: action.payload.accountNumber, amount: action.payload.amount, name:action.payload.name}
      case 'DELETE' : 
      return{...state}
      case 'UPDATE-INDEX' : 
      return{...state}

 default:   
return{...state}
    }
}