import React, { useState } from 'react'
import Search from './components/Search';
import axios from "axios";
import Results from './components/Results';
import Popup from './components/Popup';

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


  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      })

    })

  }

  const closePop = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    })
  }
  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, search: s }
    })


  }
  console.log(state.selected.Title);
  return (
    <div >
      <header>
        <h1>Cinephelia</h1>
        <h4>Search a movie and get the details of it</h4>
      </header>

      <main>
        <Search handleInput={handleInput} search_details={search_details} />
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePop} /> : false}

      </main>
    </div>
  );
}

export default App;
