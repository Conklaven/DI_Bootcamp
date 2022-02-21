export const selectMovie = (param) =>{
return {
    type: 'SELECT',
    payload: param
}
}
ex initMovies = (arr) => {
    return {
        type: 'INIT',
        payload: arr
    }
}