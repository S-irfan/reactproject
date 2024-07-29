import React, { useState } from 'react';
import axios from 'axios';
//import './Food.css'
const FoodAPI = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
 
  const APP_ID = 'c99cc5a9';
  const APP_KEY = '2170a202e44d87bf2aaf946313172710';
 
  const getRecipes = async () => {
    setLoading(true);
    setError('');
 
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Error fetching recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
 
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    getRecipes();
  };
 
  return (
    <>
    <div className="container-fluid d">
      <br></br>
      <h2 className="foodheading text-center m-5 p-5 c"><span style={{backgroundColor:'gray'}}>  Recipe Search  </span></h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input 
            type="text"
            value={query}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter ingredients (e.g., chicken, pasta)"
          />
          <button  className="foodbutton" type="submit" style={{backgroundColor:'green'}}>
            Search
          </button>
        </div>
      </form>
 
      {loading && <p className="text-center">Loading...</p>}
      {error && <p>{error}</p>}
 
      <div className="row">
        {recipes.map((item, index) => (
          <div className="col-md-4 " key={index}>
            <div className="card m-2 mb-2">
              <img src={item.recipe.image} className="card-img-top img-fluid" alt="Recipe" />
              <div className="card-body ">
                <h5 className="card-title">{item.recipe.label}</h5>
                {/* <p>Calories: {Math.round(item.recipe.calories)}</p> */}
                <a
                  href={item.recipe.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  View Receipe
                </a>
              </div>
            </div>
          </div>
        ))}
         <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      </div>
    </div>
    
    </>
  );
};
 
export default FoodAPI;
 