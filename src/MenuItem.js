import React from 'react';

const MenuItem = ({ name, imageSrc, price }) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card h-100">
        <img src={imageSrc} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
