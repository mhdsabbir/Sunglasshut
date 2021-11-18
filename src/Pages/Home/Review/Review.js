import React, { useEffect, useState } from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
const element = <FontAwesomeIcon icon={faStar} />;

const Review = () => {
  const [reviews, setAllReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);
  return (
    <div className="review">
      <Fade bottom duration={2000} distance="40px">
        <h2>Review Our Client</h2>
        <div className="container">
          <div className="row">
            {reviews.map((review) => (
              <div key={review._id} className="col-lg-4 col-md-6">
                <div className="align-item-center justify-content-center single-review shadow bg-light">
                  <div className="d-flex aligh-items-center justify-content-center">
                    <div>
                      <h5 className="text-primary">{review.name}</h5>
                      <p className="fw-bold ">
                        {" "}
                        Rating : {review.review}{" "}
                        <span className="text-warning">
                          {" "}
                          {element}
                          {element} {element} {element} {element}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p>{review.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Review;
