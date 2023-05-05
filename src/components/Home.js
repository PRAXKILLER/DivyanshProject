import React, { useState, useEffect, Suspense, lazy } from "react";
import PaginationBar from "./Pagination";
import ProductDetail from "./ProductDetail";
import { Button, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Data from "./Data.json";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import image from "../images/github_circle.png";

const Product = lazy(()=>import('./Product'))
const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const productsArray = Object.values(Data);
    console.log(productsArray);
    setProducts(productsArray[0]);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.title || ""; // Set productName to empty string if product name is undefined
    return productName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts;

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
                    className="flex flex-row items-center text-black text-xl "
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
                  className="shadow-lg flex flex-row w-full sm:w-1/2 p-2 items-center"
                >
                  <AiOutlineSearch size={40} color="white" />
                  <input
                    style={{ backgroundColor: "#3094f4" }}
                    type="text"
                    className=" p-2 w-full text-2xl justify-start text-white placeholder-white"
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
                <Row>
                  {currentProducts.map((product) => (
                    <Col xs={12} lg={4} md={6}>
                      <Suspense fallback={<div>please wait...</div>}>
                      <Product
                        key={product.id}
                        product={product}
                        onProductClick={handleProductClick}
                      />

                      </Suspense>
                    </Col>
                  ))}
                </Row>
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
