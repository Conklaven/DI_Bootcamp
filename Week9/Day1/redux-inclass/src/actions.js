export const handleChangeProp =(value)=>{
return {
    type: 'PROP_ONE',
    payload: value
}
}

export const handleClickProp =(value)=>{
    return {
        type: 'PROP_TWO',
        payload: value
    }
    }