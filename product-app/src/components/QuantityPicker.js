import React, { useState } from 'react';

const QuantityPicker = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  return (
    <div className="quantity-picker">
      <button onClick={handleDecrease}>-</button>
      <input type="text" value={quantity} readOnly />
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default QuantityPicker;
