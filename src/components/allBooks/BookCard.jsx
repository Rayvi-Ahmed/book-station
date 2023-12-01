import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({book}) => {
const {
  Bookname,
authorName,
description,
publisher,
ImageURL,
bookOrgin,
bookType,
price
}=book



  return (
    <div class="col">
      <div class="card h-100">
        <img
          src={ImageURL}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{Bookname}</h5>
          <div className="flex justify-start items-start text-muted lg:mb-3">
          <p class="card-text">{authorName}</p>
          <p class="card-text">{publisher}</p>
          </div>
          <p className="card-text">{price}</p>
          <p className="card-text">{bookType}</p>
        </div>
        <div class="card-footer">
          <Link to="details/34" className="text-decoration-none">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
