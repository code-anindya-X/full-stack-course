import React from "react";
import { useState } from "react";

const ExpenseForm = (props) => {
  let initialValue = [];
  const [expenseData, setExpenseData] = useState(initialValue);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onNameChangeHandler = (event) => {
    // console.log("Name Changed", {
    //   value: event.target.value,
    // });
    setName(event.target.value);
  };

  const onAmountChangeHandler = (event) => {
    // console.log("amount changed", { amount: event.target.value });
    setAmount(event.target.value);
  };

  const onDateChangeHandler = (event) => {
    // console.log("Date Changed", { value: event.target.value });
    setDate(event.target.value);
  };

  const expenseClearHandler = () =>
  {
    setExpenseData(initialValue);
  }
  const onSubmitHandler = () => {
    const data = { date, amount: +amount, name };
    if (name && amount) {
      props.onExpenseDataHandler(data);
      props.onShowMessageHandler(false);
      setAmount("");
      setDate("");
      setName("");
    } else {
      props.onShowMessageHandler(true);
      props.onMessageHandler("name & amount are required");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Name
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                // onChange={onNameChangeHandler}
                onChange={(event) => onNameChangeHandler(event)}
                value={name}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Amount
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Expense Amount"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={onAmountChangeHandler}
                value={amount}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Date
              </span>
              <input
                type="date"
                className="form-control"
                placeholder="Select Date"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={onDateChangeHandler}
                value={date}
              />
            </div>
            {date}
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Height
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Height"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={onAmountChangeHandler}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Weight
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Weight"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={onAmountChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={onSubmitHandler}
            >
              Add Expense
            </button>
          </div>

          <div className="col-md">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={expenseClearHandler}
            >
              Clear Expense Form
            </button>
          </div>

          <div className="col-md">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={onSubmitHandler}
            >
              Clear Expense
            </button>
          </div>

          <div className="col-md">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={onSubmitHandler}
            >
              Calculate Bmi
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseForm;
