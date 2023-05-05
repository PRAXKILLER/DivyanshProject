import React from "react";
import {FaUserCircle} from 'react-icons/fa'

const Product = ({ product, onProductClick }) => {
  const handleClick = () => {
    onProductClick(product);
  };

    return (
      <div className="flex flex-row w-full p-2 m-2 text-black shadow-md sm:w-2/5 lg:w-3/12" onClick={handleClick}>
        <div className="w-1/3">
        <FaUserCircle size={50} color="#3094f4" className="w-full" />
        </div>
        <div className="flex flex-col">
          <div>
            <h>{product.name}</h>
          </div>
          <div>
            <p>{product.handle} {product.bio}</p>
          </div>
        </div>
      </div>
    
  );
};

export default Product;
