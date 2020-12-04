import React from 'react'

function Search({ handleInput, search_details }) {
    return (
        <section className="searchBoxWrap">
            <input type="text" placeholder="Search for a movie"
                className="searchbox" onKeyPress={search_details} onChange={handleInput} />
        </section>
    )
}

export default Search;

