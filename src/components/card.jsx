import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {

  return (
    <div className="portfolio-wrapper col-md-6 col-lg-4 mt-3">
      <div className="card">
        <div className="img-wrapper">
          <img
            className="p-2"
            src={card.bizImage}
            width="100"
            alt={card.bizName}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{card.bizName}</h5>
          <p className="card-text">{card.bizDescription}</p>
          <p className="card-text border-top pt-2">
            <b>Location: </b>
            {card.bizAddress}
            <br />
            <b>Date taken: </b>
            {card.bizDate}
          </p>
          <div className="card-btn-wrapper">
            <Link
              className="btn btn-primary"
              to={`/my-portfolio/edit/${card._id}`}
            >
              Edit
            </Link>
            <Link
              className="btn btn-primary"
              to={`/my-portfolio/delete/${card._id}`}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
