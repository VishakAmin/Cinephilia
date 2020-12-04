import React, { useState } from 'react'
import Search from './components/Search';
import axios from "axios";
import Results from './components/Results';


function App() {

  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  })
  const apiurl = "http://www.omdbapi.com/?apikey=592e2ab9"

  const search_details = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.search).then(({ data }) => {
        let result = data.Search
        setState(preveState => {
          return { ...preveState, results: result }
        })
      })

      console.log(state.results);

    }
  }



  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, search: s }
    })

    console.log(state.search);
  }
  return (
    <div >
      <header>
        <h1>Movie Database</h1>
      </header>

      <main>
        <Search handleInput={handleInput} search_details={search_details} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
