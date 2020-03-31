import React from 'react';

const ProductBreakdown = (data) => {
  const { characteristics } = data.productBreakdown;
  const arr = Object.entries(characteristics);

  return (
    <div data-testid="productBreakdown" className="review-product-breakdown">
      {arr.map((rating) => (
        <div>
          {rating[0]}: {rating[1].value}
        </div>
      ))}
    </div>
  );
};

export default ProductBreakdown;
