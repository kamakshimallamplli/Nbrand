import React, { useState } from 'react';
import "./Sun.css";
const Sun= () => {
  const [selectedColor, setSelectedColor] = useState('red');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };


  return (
    <div className='product-page'>
        
    
    
      <h1>Nandu Brands</h1>
     <div className='content-container'>
      <div className='image-container'>
      {selectedColor  && <img src={'tshirt/tshirt-' + selectedColor + '.jpg'} 
      alt={'Shirt-images in ' + selectedColor } />}     
       </div>
       <div className='info-container'>
      <div className='button-container'> 
        <h2> Select Color:</h2>
        <button onClick={() => handleColorChange('black')}>Black</button>
        <button onClick={() => handleColorChange('green')}>Green</button>
        <button onClick={() => handleColorChange('brown')}>Brown</button>
          <button onClick={() => handleColorChange('red')}>Red</button>
    
        <h2 >Select Size: </h2>
      <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
        </div>
  
    <h2>Quantity</h2>
      <select>
       
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    
    <div className="price">
          <p>Price:₹5000</p>
        
    <button>Buynow</button>
    </div>
    </div>
    </div>
    </div>
  

  );
};

export default Sun;