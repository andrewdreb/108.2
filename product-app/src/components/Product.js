import React from 'react';
import { Card } from 'react-bootstrap';
import QuantityPicker from './QuantityPicker';

const Product = ({ product }) => {
  const handleQuantityChange = (quantity) => {
    console.log(`Quantity for ${product.name} changed to ${quantity}`);
  };

  return (
    <Card className="product">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        <QuantityPicker onChange={handleQuantityChange} />
      </Card.Body>
    </Card>
  );
};

export default Product;
