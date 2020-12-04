import React from 'react'

function Result({ result }) {
    return (
        <div className="result">
            <img src={result.Poster} alt={`${result.Title}_image`} />
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result
