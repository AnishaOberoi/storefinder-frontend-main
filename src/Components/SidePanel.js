import React from "react";
import image from "./image.png";
import SearchResult from "./SearchResult";

export default function SidePanel({ list, onClickHandler }) {
  return (
    <div className="sidepanel" style={styles.sidepanel}>
      <div className="navbar" style={styles.navbar}>
        <img src={image} height="50px" style={styles.logo} alt="logo" />
        <h2>Storefinder</h2>
      </div>
      <div className="search" style={styles.search}>
        <select style={styles.dropdown}>
          <option value="category">Category</option>
          <option value="product">Product</option>
          <option value="name">Name</option>
        </select>
        <input
          type="text"
          placeholder="Search for stores"
          style={styles.searchInput}
        />
      </div>
      <div className="searchResults" style={styles.searchresults}>
        {list.map((restaurant, index) => (
          <SearchResult key={index} data={restaurant} onClickHandler={onClickHandler} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  dropdown: {
    marginRight: '10px',
    padding: '7px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
    fontSize: '16px'
  },
  searchInput: {
    flex: 1,
    padding: '7px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '17px'
  },
  sidepanel: {
    height: '100vh',
    width: '25vw',
    zIndex: '10',
    boxShadow: '1px 1px 7px 5px gray',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px'
  },
  logo: {
    height: '50px',
    width: '50px',
    borderRadius: '50px',
    marginRight: '30px',
    marginLeft: '20px'
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    padding: '10px',
  },
  searchresults: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: 'scroll',
    marginTop: '20px',
    padding: '10px',
  }
};
