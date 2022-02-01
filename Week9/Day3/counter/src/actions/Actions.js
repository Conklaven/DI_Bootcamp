export const handleUp = (data) => {
    return {
      type: 'INCREMENT',
      payload: data +1
    }
  }
  
  export const handleDown = (data) =>{
    return{
      type:'DECREMENT',
      payload: data -1
    }
  }
  