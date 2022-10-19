import React, { useState } from 'react'
import { Amount } from '../components/Amount'
import DialogWithPhoto from '../components/DialogWithPhoto';
import Price from '../components/Price'

const ProductPage = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [mainImage, setMainImage] = useState("https://avatarfreak.github.io/frontend-ecommerce-product-page/images/image-product-1.jpg");

  let smallImages: Array<string> = [
    "https://avatarfreak.github.io/frontend-ecommerce-product-page/images/image-product-1.jpg",
    "https://avatarfreak.github.io/frontend-ecommerce-product-page/images/image-product-2-thumbnail.jpg",
    "https://avatarfreak.github.io/frontend-ecommerce-product-page/images/image-product-3-thumbnail.jpg",
    "https://avatarfreak.github.io/frontend-ecommerce-product-page/images/image-product-4-thumbnail.jpg"
  ];

  function zoomImage() {
    setOpenDialog(true);
  }

  function smallImage(image: string) {
    let className = "product-page-image small-image ";
    if (image === mainImage) {
      className += " selected";
    }
    return <img onClick={e => setMainImage(image)}
      className={className}
      src={image}
      alt="shoe" />
  }

  return (
    <div className='product-page'>
      <div className='product-page-left'>
        <img
          onClick={() => zoomImage()}
          className='product-page-image big-image'
          src={mainImage}
          alt="shoe" />
        <div className='product-page-left-images'>
          {smallImages.map((val) => smallImage(val))}
        </div>
      </div>
      <div className='product-page-right'>
        <div className='product-page-right-content'>
          <div className='product-page-right-content-description'>
            <span className='product-page-company'>SNEAKER COMPANY</span>
            <span className='product-page-title'>Fall Limited Edition Sneakers</span>
            <span className='product-page-description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</span>
          </div>
          <Price />
          <Amount />
        </div>
      </div>
      <DialogWithPhoto
        open={openDialog}
        setOpenState={setOpenDialog}
        image={mainImage} />
    </div>
  )
}

export default ProductPage