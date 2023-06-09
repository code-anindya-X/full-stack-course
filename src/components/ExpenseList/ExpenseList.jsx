import React from "react";

const ExpenseList = ({ name, amount, date }) => {
  return (
    <>
      <div className="container list-group">
        <div className="row mt-2 mb-2 alert alert-success">
          <div className="col-md">
            <div className="d-flex justify-content-between">
              <p>Name: {name}</p>
              <p>Amount: {amount}</p>
              <p>Date: {date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
