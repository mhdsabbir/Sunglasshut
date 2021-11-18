import React, { useEffect, useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import { Link } from "react-router-dom";
import "./Explore.css";
import Fade from 'react-reveal/Fade';
const Explore = () => {
  const [explores, setExplores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setExplores(data));
  }, []);

  return (
    <div>
            <Navigation></Navigation>
            <div className='bg-light'>
                <Fade bottom duration={2000} distance="40px">
                        <h2 className='mt-2 fw-bold'>Our Explore Products</h2>
                        <div className="container mt-5">
                            <div className="row"> 
                                {
                                    explores.map(product => <div className='col-lg-4 col-md-6 col-sm-12' key={product.id}>
                                        <div className="single-product rounded-3  mb-4 bg-light shadow">
                                            <img src={product.image} className='img-fluid' alt="" />
                                            <div className="content p-3 ">
                                                <h5 className='text-danger fw-bold'>{product.name}</h5>
                                                <p>{product.description}</p>
                                                <h5>Price: {product.price}</h5>
                                                <Link to={`/product/${product._id}`}>
                                                    <button className='btn btn-primary mt-3'>Purches</button>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                </Fade>
            </div>
            
        </div>
  );
};

export default Explore;
