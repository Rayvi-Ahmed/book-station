import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageBookTable = () => {

const [books,setBooks]=useState([])

useEffect(()=>{
  fetch("http://localhost:3000/bookShow")
  .then(res=>res.json())
  .then(data=>setBooks(data))
},[books])


const handleDelete=(id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
  fetch(`http://localhost:3000/allBooks/${id}`,{
  method:"DELETE"
  })
  .then(res=>res.json())
  .then(data=>{
if(data.deletedcount>0){
  Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });

}
})

    }
  });

}
  return (
    <div className="p-8 lg:w-block">
      <table className="table table-dark table-striped">


        <thead className="p-3 text-xl">
        <tr className="text-white">
            <th scope="col">SL</th>
            <th scope="col">Book name</th>
            <th scope="col">publisher</th>
            <th scope="col">price</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
        { 
      
                            books.map((book, index) => <tr key={book._id}>
                                <th>{index + 1}</th>
                                <td>{book.Bookname}</td>
                                <td>{book.publisher}</td>
                                <td>{book.price}</td>
                                <td>
                                  <Link to={`/admin/dashboard/edit-books/${book._id}`}><button className="btn btn-primary">Update</button></Link>
                                <button onClick={()=>handleDelete(book._id)} className="btn btn-secendery">Delete</button>
                                </td>
                               
                             
        </tr>)}
         
        </tbody>
      </table>
    </div>
  );
};
export default ManageBookTable;


