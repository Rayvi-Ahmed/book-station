import React from "react";
import ManageBookTable from "../../components/ManageBookTable";

const ManageBooks = () => {
  return (
    <div className="p-0 text-center text-orange-600 font-bold bg:black-300">
      manage books
      <ManageBookTable />
    </div>
  );
};

export default ManageBooks;
