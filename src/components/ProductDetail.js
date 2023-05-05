import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { TiArrowBack } from "react-icons/ti";
import { TiUser } from "react-icons/ti";
import Product from "./Product";

const ProductDetail = ({ product, onClose }) => {
  const discounted_price = Math.floor(
    product.price - (product.price * product.discountPercentage) / 100
  );
  return (
    <div className="w-full">
      <div className="flex flex-row items-center text-lg" onClick={onClose}>
        <TiArrowBack size={30} className="mr-3" />
        Back
      </div>
      <div className="p-10 flex flex-row items-center">
        <TiUser size={100} />
        <div className="p-4 text-sm sm:text-2xl">
          <div className="">
            <h>{product.username}</h>
          </div>
          <div>
            <h>{product.handle}</h>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-base">Bio</h1>
        <p>{product.bio}</p>
        <h1 className="font-bold text-base">Works At</h1>
        <p>{product.works_at}</p>
        <div className="flex flex-row justify-between sm:justify-start">
          <div className="sm:mr-20 md:mr-40">
            <h1 className="font-bold text-base">Repositories</h1>
            <p>{product.pinned_repositories.length}</p>
          </div>
          <div className="font-bold text-base">
            Followers
            <p className="font-normal">{product.followers}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-base">Pinned Repositories</h1>
          {product.pinned_repositories.map((repo) => (
            <Product product={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
