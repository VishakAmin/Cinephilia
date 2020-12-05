import React from 'react'

function Result({ result, openPopup }) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster} alt={`${result.Title}_image`} />
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result
