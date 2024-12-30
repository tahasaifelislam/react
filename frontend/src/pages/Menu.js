import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')  // Ensure this URL is correct
      .then((response) => {
        console.log(response.data);  // Check the data in the console
        setMenuItems(response.data);  // Store the menu items in the state
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching menu items:', error);
        setLoading(false);
      });
  }, []);
  
  // Fetch menu items when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')  // Ensure this is correct
      .then((response) => {
        console.log(response.data);  // Check the data in the console
        setMenuItems(response.data);  // Store the menu items in state
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching menu items:', error);
        setLoading(false);
      });
  
  
  }, []);  // Empty dependency array means this runs once when the component mounts

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      {loading ? (
        <p>Loading...</p>  // Display a loading message while the data is being fetched
      ) : (
        <div className="menuList">
          {menuItems.length > 0 ? (
            menuItems.map((menuItem, key) => (
              <MenuItem
                key={key}
                image={menuItem.image}  // This is the URL to the image
                name={menuItem.name}    // Sandwich name
                price={menuItem.price}  // Sandwich price
                onClick={() => console.log(`Adding ${menuItem.name} to cart`)}  // Implement add to cart logic here
              />
            ))
          ) : (
            <p>No menu items available.</p>  // Show a message if no menu items are returned
          )}
        </div>
      )}
    </div>
  );
}

export default Menu;
