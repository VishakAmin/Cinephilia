import React from 'react'
import Result from './Result'


function Results({ results, openPopup }) {
    return (
        <section className="results">
            {results.map((result) => (
                <Result openPopup={openPopup} key={result.imdbID} result={result} />
            ))}
        </section>
    )
}

export default Results;
