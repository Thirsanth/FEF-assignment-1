
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

export default function Question2() {
  const [data, setData] = useState({
    name: "Pixel",
    price: 599.99,
    description: "The pixel before update"
  });

  const navigate = useNavigate();

  const prodUpdate = () => {
    const newdata = {
      name: "Pixel",
      price: 799.99,
      description: "The pixel after update"
    };

    setData(newdata);
    validateProps(newdata);
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <Link to="/que1">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2 transition duration-200 ease-in-out">
            Question 1
          </button>
        </Link>
        <Link to="/que2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out">
            Question 2
          </button>
        </Link>
      </div>
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <ProdDisplay proddetails={data} productupdate={prodUpdate} />
      <Toaster />
    </div>
  );
}

function validateProps(product) {
  if (typeof product.name !== 'string') {
    toast.error('proptype Error: Product name must be a string!');
  } else if (typeof product.price !== 'number') {
    toast.error('proptype Error: Product price should be a number!');
  } else if (typeof product.description !== 'string') {
    toast.error('proptype Error: Product description should be a string!');
  } else {
    toast.success('prop updated successfully');
  }
}

const ProdDisplay = ({ proddetails, productupdate }) => {
  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      <p className="mb-2"><strong>Name:</strong> {proddetails.name}</p>
      <p className="mb-2"><strong>Price:</strong> {proddetails.price}</p>
      <p className="mb-4"><strong>Description:</strong> {proddetails.description}</p>
      <button
        className="bg-black text-white px-4 py-2 rounded w-[150px]"
        onClick={productupdate}
      >
        Update Product
      </button>
    </div>
  );
}

ProdDisplay.propTypes = {
  proddetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired // Fixed typo here
  }).isRequired,
  productupdate: PropTypes.func.isRequired,
};
