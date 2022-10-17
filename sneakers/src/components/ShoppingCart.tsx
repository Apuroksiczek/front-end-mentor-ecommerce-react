import Divider from '@mui/material/Divider/Divider'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingCart = () => {
  return (
    <div className='shopping-cart-menu'>
      <div className='shopping-cart-menu-title'>Cart </div>
      <Divider />
      <div className="shopping-cart-menu-items">
        <div className="shopping-cart-item">
          <img
            src="https://avatarfreak.github.io/frontend-ecommerce-product-page/images/image-product-2-thumbnail.jpg"
            className="smaller-image"
            alt=""
          />
          <div className="shopping-cart-item-informations">
            <div>Fall Limited Edition Sneakers</div>
            <div className='price'>
              $125.00
            </div>
          </div>
          <DeleteIcon />
        </div>
        <Divider style={{ width: '80%' }} />
        <button className='checkout-button cart-button'>
          Checkout
        </button>
      </div>
    </div>
  )
}

export default ShoppingCart