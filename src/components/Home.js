import React, { useState, useEffect, Suspense, lazy } from "react";
import ProductDetail from "./ProductDetail";
import Data from "./Data.json";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import image from "../images/github_circle.png";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
    console.log(filteredProducts);
  }, []);

  const fetchProducts = async () => {
    const productsArray = Object.values(Data);
    console.log(productsArray[0]);
    setProducts(productsArray[0]);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
    setCurrentPage(1);
  };

  let filteredProducts = products.filter((product) => {
    const productName = product.name || ""; // Set productName to empty string if product name is undefined
    return productName.toLowerCase().includes(searchQuery.toLowerCase());
  });
  console.log(filteredProducts);
  let currentProducts = filteredProducts;

  useEffect(() => {
    filteredProducts = products.filter((product) => {
      const productName = product.name || ""; // Set productName to empty string if product name is undefined
      return productName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    currentProducts = filteredProducts;

    console.log(currentProducts);
  }, [searchQuery]);

  console.log(fetchProducts);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleProductClose = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div>
        {selectedProduct == null ? (
          <>
            <div>
              <Navbar>
                <Container style={{ margin: 0 }}>
                  <Navbar.Brand
                    className="flex flex-row items-center text-xl text-black "
                    style={{ color: "var(--font-color)", fontWeight: "bolder" }}
                  >
                    <img src={image} className="w-16 mr-4" alt="logo" />
                    GitHub Profile Viewer
                  </Navbar.Brand>
                </Container>
              </Navbar>
            </div>
            <div className="w-full mt-5">
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{ backgroundColor: "#3094f4" }}
                  className="flex flex-row items-center w-full p-2 shadow-lg sm:w-1/2"
                >
                  <AiOutlineSearch size={40} color="white" />
                  <input
                    style={{ backgroundColor: "#3094f4" }}
                    type="text"
                    className="justify-start w-full p-2 text-2xl text-white placeholder-white "
                    onChange={handleSearch}
                    placeholder="Search User"
                  />
                  <RxCross2 size={40} color="white" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="flex flex-row flex-wrap w-full justify-evenly">
                  {currentProducts.map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      onProductClick={handleProductClick}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <ProductDetail
            product={selectedProduct}
            onClose={handleProductClose}
          />
        )}
      </div>
    </>
  );
};

export default Home;
