import React, { useState } from 'react';

const ProductImageUpload = ({ onChange }) => {
  const [imageSrc, setImageSrc] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
    onChange(event);
  };

  return (
    <div>
      <div className="group">
        <label htmlFor="Product Image">Product Image (500px X 500px)</label>
        <input type="file" name='productImage' onChange={handleImageChange} />
      </div>
      {imageSrc && <img className='zone' src={imageSrc} alt="Product" />}
    </div>
  );
};

export default ProductImageUpload;