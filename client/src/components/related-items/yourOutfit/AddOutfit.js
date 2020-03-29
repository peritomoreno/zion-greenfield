import React from 'react';

const AddOutfit = ({ addOutfitHandler }) => {
  return (
    <div
      data-testid="your-outfit"
      className="col related-card"
      onClick={addOutfitHandler}
    >
      <div className="">
        <div>
          <p>+</p>
          <div className="">
            <p className="">Add to Outfit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOutfit;
