import Footer from '../components/Footer'
import React, { useState, useEffect } from "react";

const categories = ["Mental Health", "Depression", "Anxiety", "Stress", "Counseling"];

const Articles = () => {
  const [articles, setArticles] = useState({});
  const apiKey ="76ed00941a9e263161f609cb35c3f758"

  // Function to fetch articles by category
  const fetchArticles = async (category) => {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${category}&lang=en&token=${apiKey}`
      );
      const data = await response.json();
      return data.articles || [];
    } catch (error) {
      console.error(`Error fetching articles for ${category}:`, error);
      return [];
    }
  };

  // Fetch articles for all categories
  useEffect(() => {
    const fetchAllCategories = async () => {
      const results = {};
      for (const category of categories) {
        const categoryArticles = await fetchArticles(category);
        results[category] = categoryArticles;
      }
      setArticles(results);
    };
    fetchAllCategories();
  }, []);

  return (
    <>
    <div className="container">
      <h2 className='text-center '> Grow with us!!</h2>
      <h1 className="text-center my-4">Mental Health Articles</h1>
      {categories.map((category) => (
        <div key={category} className="container my-4">
          <h2 className="text-center">{category}</h2>
          <div className="row">
            {articles[category]?.map((article, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card h-70">
                  <img
                    src={article.image || "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt={article.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-5">{article.title}</h5>
                    
                    <a
                      href={article.url}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default Articles;


