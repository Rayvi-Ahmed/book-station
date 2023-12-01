import React from "react";
import { useForm, } from "react-hook-form"
import Swal from "sweetalert2";

const BookUploadForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();


const onSubmit=data=>{
  console.log(data)

  fetch('http://localhost:3000/allBooks',
  {
    method:"POST",
    headers:{
    "content-type":"application/json"
    },
    body:JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.acknowledged===true){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book has been added",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })

  reset()
}

  return (
    <div className="p-3 bg-light rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}  class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
       Book Name
          </label>
          <input {...register("Bookname", { required: true })}type="text" class="form-control" id="inputEmail4" />
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
           Author Name
          </label>
          <input {...register("authorName",{require:true})} type="text" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
      Description
          </label>
          <textarea
          {...register("description",{require:true})}
            type="text"
            class="form-control"
            id="inputAddress"

          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
        Publisher
          </label>
          <input
            {...register("publisher",{require:true})}
            type="text"
            class="form-control"
            id="inputAddress2"
  
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
    Image URL
          </label>
          <input
           {...register("ImageURL",{require:true})}
            type="text"
            class="form-control"
            id="inputAddress2"
      
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Book Origin
          </label>
          <input
             {...register("bookOrgin",{require:true})}
          type="text" 
          class="form-control" 
          id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
       Books Type
          </label>
          <select {...register("bookType",{require:true})} 
          id="inputState" class="form-select">
            <option selected>Detective Thriler</option>
            <option>Sci-Fi</option>
            <option>Crime Thriller</option>
            <option>Comics</option>
            <option>Spy</option>
            <option>Science</option>
            <option>Romantic</option>
            <option>Sports</option>
            <option>Entartainment</option>
            <option>Educational</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
        Price
          </label>
          <input 
          {...register("price",{require:true})}
          type="number" class="form-control" 
          id="inputZip" />
        </div>
        <div class="col-12">
        </div>
        <div class="col-12">
          <button type="submit" className="btn btn-block btn-secondary">
           Add Books
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookUploadForm;
