import React from "react";
import "./UserDetails.css";

const UserDetails = ({ name, age, gender }) => {
  return (
    <div>
      <div className="user-details">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div class="card">
                <img src="https://source.unsplash.com/random/200x200/?student user-profile" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{name}</h5>
                  <p class="card-text">
                    <p>{gender}</p>
                    <p>{age}</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
            <span className='heading'>Name: </span>
            <span className='value'>{name}</span>

        </p>
        <p>
            <span className='heading'>Age: </span>
            <span className='value'>{age}</span>

        </p>
        <p>
            <span className='heading'>Gender: </span>
            <span className='value'>{gender}</span>

        </p>
      </div>
    </div>
  );
};

export default UserDetails;
