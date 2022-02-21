
const SearchBox = (props =>{
    return(
        <>
        <nav className="nav">
            <div className="search">
                <input className="pa3 ba b--red bg-white" id="searchbox" type='text' onKeyPress={props.searchItem} placeholder="Search Movies"/>
            </div>
        </nav>
        </>
    )
})

export default SearchBox;