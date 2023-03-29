//React
import React, { useState} from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import About from './components/about';
import PageNotFound from './components/pageNotFound'
import Main from './components/main'

// Components
import Navbar from './components/common/navbar'
import Footer from './components/common/footer'

//Services
import { getSearchWeather } from './services/weatherAppServices'

//CSS
import './App.css';

// App function -saves component state and store functions to fetch data from API and also to handle changes to form
function App() {

  const [query, setQuery] = useState('Sydney')
  const [searchResults, setSearchResults] = useState({})

  // Calls the API - and stores in getSearch variable to be used as prop for child pages
  const getSearch = async (data) => {
    try {
      const res = await getSearchWeather(query)
      console.log(res.data)
      setSearchResults(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  // Function expression - for handling input form changes
  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value)
  }
  
  // Route the pages using react-router-dom
  return (
    <div className="App">
      <Navbar onChange={handleSearchChange} query={query} getSearch={getSearch}></Navbar>
      <Routes>
        <Route path="/about" element={<About twitterName="Weather-App" />}></Route>
        <Route path="/PageNotFound" element={<PageNotFound />}></Route>
        <Route path="/" element={<Main results={searchResults} results2={searchResults.forecast} query={query} />}></Route>
        <Route path="*" element={<PageNotFound pageNotFound="404" />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
