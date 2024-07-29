import React, { useState, useEffect } from 'react';
export default function News() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=18ed2d1832924313ae196aabf8fb6d24');
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className='container-fluid  i'>
        <center>
        <h1 style={{ color: 'yellow' }}>Top Headlines News</h1>
        <br></br>
        <br></br>
        <input type="text" placeholder="Search by title" value={search} onChange={handleSearch} style={{ borderRadius: 5 }} />
        </center>
        <div className='row'>
          {articles
            .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
              <div key={item.title} className='col-md-12'>
                <div className="card">
                  {item.urlToImage && <img src={item.urlToImage} className="card-img-top" alt={item.title} />}
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </div>
      
    </>
  );
}

