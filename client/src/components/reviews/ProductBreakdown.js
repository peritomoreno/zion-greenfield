import React from 'react';

const ProductBreakdown = () => {
  // Add productBreakdown prop once it exists
  return (
    <div data-testid="productBreakdown">
      <table className="reviews">
        <tbody>
          <tr>
            <td>Size: |---------^--| </td>
          </tr>
          <tr>
            <td>Comfort:|---------^--| </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductBreakdown;
