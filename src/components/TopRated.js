import React from 'react'
import { useEffect, useState } from 'react';
import MovieBox from '../MovieBox';
import { Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=cb313fb3cff02b0c9d284d5946f767ed";
const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
  }, [])

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching")
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=cb313fb3cff02b0c9d284d5946f767ed&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch (e) {
      console.log(e);

    }
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }
  return (
    <>
      <nav class="navbar navbar-expand-sm  navbar-light">
        <a class="navbar-brand font-weight-bold text-danger font-italic text-capitalize" href="/">MovieDB App PR</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/toprated" className="nav-link font-weight-bold text-danger font-italic h5">Top Rated   </Link>
            </li>
            <li class="nav-item">
              <Link to="/upcoming" className="nav-link font-weight-bold text-danger font-italic h5" >Upcoming</Link>
            </li>
          </ul>
          <Form className="form-inline my-2 my-lg-0" onSubmit={searchMovie} autoComplete="off">
            <FormControl
              type="search"
              placeholder="Movie Search"
              className="form-control mr-sm-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
            <Button className="btn btn-outline-danger my-2 my-sm-0 bg-light" type="submit">Search</Button>
          </Form>
        </div>
      </nav>
      <div className="text-center mt-4 mb-4">
      <h3 class="heading"> <span>Top Rated</span> </h3></div>
        
      <div className='container'>
        <div className='grid'>
          {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
        </div></div>


    </>
  )
}

export default TopRated;