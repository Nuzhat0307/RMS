import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ProductImage from './ProductImageUpload.js';

const AddProduct = () => {

  const [productName, setProductName] = useState('');
  const [restaurantPrice, setRestaurantPrice] = useState('');
  const [mrpPrice, setMrpPrice] = useState('');
  const [itemType, setItemType] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [productImages, setProductImages] = useState([{id:1, file:null}]);

  const handleProductImageChange = (index, event) => {
    const newProductImages = [...productImages];
    newProductImages[index].file = event.target.files[0];
    setProductImages(newProductImages);
  };

  const addMoreImages = () => {
    setProductImages([...productImages, { id: productImages.length + 1, file: null }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  }

  const handleReset = () => {
    setProductName('');
    setRestaurantPrice('');
    setMrpPrice('');
    setItemType('');
    setCategory('');
    setSubCategory('');
    setStock('');
    setDescription('');
    setProductImages([{ id: 1, file: null }]);
  };

  return (
    <div className='margin' style={{ fontFamily: 'Cabin, sans-serif' }}>
      <h3 className='center'>Add New Product</h3>

      <form className='container padding-16 card' style={{ maxWidth: '60vw', margin: 'auto' }} onSubmit={handleSubmit}>

        <div className="group">
          <label htmlFor="product name">Product Name</label>
          <input type="text" placeholder='Enter Product Name Here' className='input border' value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>

        <div className="row">
          <div className="half">
            <label htmlFor="Restaurant Price (INR)*">Restaurant Price (INR)*</label>
            <input type="text" placeholder='Enter Sale Price Here' className='input border' style={{ width: '96%' }} value={restaurantPrice} onChange={(e) => { setRestaurantPrice(e.target.value) }} />
          </div>
          <div className="half">
            <label htmlFor="MRP Price (INR)" className='margin-left'>MRP Price (INR)</label>
            <input type="text" placeholder='Enter Product Price Here' className='input border margin-left' style={{ width: '96%' }} value={mrpPrice} onChange={(e) => setMrpPrice(e.target.value)} />
          </div>
        </div>

        <div className="group">
          <label htmlFor="Item Type">Item Type</label>
          <select name="select" id="select" className='select input border' value={itemType} onChange={(e) => setItemType(e.target.value)}>
            <option value="" disabled selected>Select</option>
            <option value="Veg">Veg</option>
            <option value="Non Veg">Non Veg</option>
          </select>
        </div>

        <div className="row">
          <div className="half">
            <label htmlFor="Category">Category</label>
            <select name="Category" id="Category" className='select input border' style={{ width: '96%' }} value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="" disabled selected>Select Your Category</option>
              <option value="Non-Veg-pickles-572">Non-Veg-pickles-572</option>
              <option value="Veg-pickles-618">Veg-pickles-618</option>
              <option value="Best Sellers">Best Sellers</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="half">
            <label htmlFor="Sub Category" className='margin-left'>Sub Category</label>
            <select name="Sub Category" id="Sub Category" className='select input border margin-left' style={{ width: '96%' }} value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
              <option value="" disabled selected>Select Your Sub Category</option>
            </select>
          </div>
        </div>

        <div className="group">
          <label htmlFor="Stock Availability">Stock Availability: </label>
          <input type='radio' name='stock' value='yes' checked={stock === 'yes'}
            onChange={(e) => setStock(e.target.value)} />
          <label htmlFor="yes"> Yes </label>
          <input type="radio" name='stock' value='no' checked={stock === 'no'} onChange={(e) => setStock(e.target.value)} />
          <label htmlFor="No"> No </label>
        </div>

        <label htmlFor="Description">Description:</label>
        <CKEditor
          editor={ClassicEditor}
          data={description}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDescription(data);
          }}
          config={{
            toolbar: [
              'bold', 'italic', 'numberedList', 'bulletedList', 'indent', 'outdent', 'link', 'unlink', 'about',
            ]
          }}
        />

        <div className="row">
          {productImages.map((image, index) => (
            <div className="half" key={image.id}>
              <ProductImage onChange={(e) => handleProductImageChange(index, e)} />
            </div>
          ))}
        </div>
        <button type="button" className='btn indigo' onClick={addMoreImages}>Add More Images</button>

        <div>
          <button type='submit' className='btn blue margin-top'>Add Item</button>
          <button type='button' className='btn green margin-top margin-left' onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div >
  )
}

export default AddProduct;
