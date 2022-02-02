export const handleArray = (data) => {
    return {
      type: 'ARRAY',
      payload: data
    }
  }

  export const handleText = (data) =>{
    return{
      type:'TEXT',
      payload: data
    }
  }