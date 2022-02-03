
  export const insert = (data) =>{
    console.log(data)
    return{
      type:'SELECTED',
      payload: data
    }
  }

  export const deletePost = (e) =>{
    console.log(e)
    return{
      type:'DATA',
      payload: e
    }
  }