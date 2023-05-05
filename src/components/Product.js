import React from "react";
import {FaUserCircle} from 'react-icons/fa'

const Product = ({ product, onProductClick }) => {
  const handleClick = () => {
    onProductClick(product);
  };

    return (
      <div className="text-black m-2 shadow-md p-2 flex flex-row" onClick={handleClick}>
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

{/* <Card style={{color:'black', margin:'2rem 2rem'}}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.bio}
        </Card.Text>
        <Button variant="secondary" onClick={handleClick}>View Details</Button>
      </Card.Body>
    </Card> */}