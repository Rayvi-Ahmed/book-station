import React from "react";
import BookUploadForm from "../../components/BookUploadForm";

const UploadBooks = () => {
  return (
    <div className="bg-cyan-800 p-5">
     <h1 className="text-center text-3xl font-bold font-serif py-4 text-orange-400">
      Book Upload Form !
     </h1>
      <BookUploadForm />
    </div>
  );
};

export default UploadBooks;
