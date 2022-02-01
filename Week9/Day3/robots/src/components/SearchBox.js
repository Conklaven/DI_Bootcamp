
const SearchBox = (props =>{
    return(
        <>
        <nav className="nav">
        <input className="pa3 ba b--green bg-lightest-blue" id="searchbox" type='text' onChange={props.searchItem} placeholder="search robots"/>
        </nav>
        </>
    )
})

export default SearchBox;