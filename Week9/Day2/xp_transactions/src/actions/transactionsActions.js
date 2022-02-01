export const handleInsert = (data) => {
    return {
      type: 'INSERT',
      payload: data
    }
  }
  
  export const handleUpdate = (data) =>{
    return{
      type:'UPDATE',
      payload: data
    }
  }
  export const handleDelete = (id) =>{
    return{
      type:'DELETE',
      payload: id
    }
  }
  export const handleIndex = (index) =>{
    return{
      type:'UPDATE-INDEX',
      payload: index
    }
  }