
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const {id}=useParams()
  console.log(id)
  const [bookDetails,setBookdetails]=useState({})

  const {
    Bookname,
    authorName,
    description,
    publisher,
    ImageURL,
    bookOrgin,
    bookType,
    price,
    _id
  }=bookDetails

useEffect(()=>{
  fetch(`http://localhost:3000/bookShow/${id}`)
  .then(res=>res.json())
  .then(data=>{
        setBookdetails(data)
        console.log(data)
})
},[id])
  return <div className="container mx-auto py-9">
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="lg:w-[360px]" src={ImageURL} alt="Album"/></figure>
  <div className="card-body p-7">
<h2 className="card-title">{Bookname}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Get Buy</button>
    </div>
  </div>
</div>

  </div>
};

export default BookDetails;
