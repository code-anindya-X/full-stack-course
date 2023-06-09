import React from "react";
import { useState } from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const Expense = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const onExpenseDataHandler = (data) => {
    setExpenseData((prevState) => [...prevState, data]);
  };

  const onShowMessageHandler = (msg) => {
    setShowMessage(msg);
  };

  const onMessageHandler = (msgStatus) => {
    setMessage(msgStatus);
  };
  return (
    <>
      <ExpenseForm
        onExpenseDataHandler={onExpenseDataHandler}
        onShowMessageHandler={onShowMessageHandler}
        onMessageHandler={onMessageHandler}
      ></ExpenseForm>

      <hr />

      <div className="container">
        <div className="row">
          <div className="col-md my-4">
            <p className="text-center fs-2 fw-medium font-monospace">
              Expense List
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            {expenseData.length !== 0 ? (
              expenseData.map((ele, index, arr) => (
                <>
                  <ExpenseList
                    name={ele.name}
                    amount={ele.amount}
                    date={ele.date}
                  />
                </>
              ))
            ) : (
              <p className="fs-4 text-center ">ENTER EXPENSE</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expense;
