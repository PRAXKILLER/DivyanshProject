import React from "react";

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div style={{
          width: "9rem", height: "2rem", border: "2px solid var(--secondary-bg)", borderRadius:"5px", margin:"20px"
    }}>
      <ul className="pagination" >
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? 'active' : ''} style={currentPage===number ?{ width:"3rem", borderLeft:"1px solid var(--secondary-color)", background:"var(--secondary-bg)"}:{width:"3rem", borderLeft:"1px solid var(--secondary-bg)"}}>
            <a onClick={() => paginate(number)} href="#" style={{textDecoration:"none", color:"var(--font-color)"}}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
