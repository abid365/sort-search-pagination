import React from "react";
import { List } from "../styled/List.styled";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul style={{ display: "flex", gap: "10px", listStyleType: "none" }}>
          {pageNumbers.map((number) => (
            <List key={number}>
              <button
                style={{ textDecoration: "none", border: "none" }}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </List>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
