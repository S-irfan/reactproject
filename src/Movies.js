import axios from 'axios';
import React, { useState } from 'react';
export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [name, setName] = useState('');
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setName(selectedValue);
    };
    const apiKey = '329d103';
    const Movie = () => {
        axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${name}&type=movie&page=1`)
            .then((res) => {
                if (res.data.Response === 'True') {
                    setMovies(res.data.Search);
                } else {
                    setMovies([]);
                }
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setMovies([]);
            });
    };
    const handler = (e) => {
        e.preventDefault();
        Movie();
    };
    return (
        <>
            <div className='container-fluid f'>
                <div className=' text-center p-5' >
                    <h1 className='g p-5' style={{color:'yellow'}} >All Movies Search Here</h1>
                    <br></br>
                   <div className='row'>
                        <div className='col-md-12'>
                            <div className='searchBar text-center m-5'>
                                <input style={{backgroundColor:'white'}}
                                    type='text'
                                    placeholder='Search movies'
                                    onChange={(e) => setName(e.target.value)} />
                                <button className='bg-danger text-light' onClick={handler}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    {movies.length > 0 && (
                        <div className='row bg-info'>
                            {movies.map((movie) => (
                                <div key={movie.imdbID} className='col-md-4'>
                                    <div className='card bg-info' style={{ height: 500, marginBottom: 30 }}>
                                        <img
                                            src={movie.Poster}
                                            className='card-img-top'
                                            alt={movie.Title}
                                            width={300}
                                            height={350}
                                        />
                                        <div className='card-body bg-light'>
                                            <h2 className='card-title'>{movie.Title}</h2>
                                            <button className='movie-detailsBtn bg-success text-light'>
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                     </div>
                    
    <br></br>
    <br></br>
    <br></br>
   
            </div>
           
      
        </>
    );
}