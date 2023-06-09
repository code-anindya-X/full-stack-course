import React from "react";
// import UserDetails from "../UserDetails/UserDetails";
import Expense from "../Expense/Expense";
import "./Main.css";
// import OtpGenerator from "../OtpGenerator/OtpGenerator";

const Main = () => {
  // const data = [
  //   {
  //     name: "rahul",
  //     age: 13,
  //     gender: "male",
  //   },
  //   {
  //     name: "rahul",
  //     age: 13,
  //     gender: "male",
  //   },
  //   {
  //     name: "rahul",
  //     age: 13,
  //     gender: "male",
  //   },
  //   {
  //     name: "rahul",
  //     age: 13,
  //     gender: "male",
  //   },
  //   {
  //     name: "rahul",
  //     age: 13,
  //     gender: "male",
  //   },
  //   {
  //     name: "rahul",
  //     age: 13,
  //     gender: "male",
  //   },
  // ];
  return (
    <React.Fragment>
      <main>
        {/* <UserDetails /> */}
        <Expense></Expense>
        {/* <OtpGenerator /> */}


{/* 
        {data.map((ele, index, arr) => (
          <UserDetails
            name={ele.name}
            age={ele.age}
            gender={ele.gender}
            key={index}
          />
        ))} */}
        {/* <UserDetails
            name={data[0].name}
            age={data[0].age}
            gender={data[0].gender}
        />
           <UserDetails
            name={data[0].name}
            age={data[0].age}
            gender={data[0].gender}
        />
           <UserDetails
            name={data[0].name}
            age={data[0].age}
            gender={data[0].gender}
        />
           <UserDetails
            name={data[0].name}
            age={data[0].age}
            gender={data[0].gender}
        />
           <UserDetails
            name={data[0].name}
            age={data[0].age}
            gender={data[0].gender}
        />
           <UserDetails
            name={data[0].name}
            age={data[0].age}
            gender={data[0].gender}
        />
         */}
      </main>
    </React.Fragment>
  );
};

export default Main;
