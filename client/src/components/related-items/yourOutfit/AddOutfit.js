import React from 'react';

const AddOutfit = ({ addOutfitHandler }) => {
  return (
    <button
      type="button"
      data-testid="your-outfit"
      className="related-card"
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
    </button>
  );
};

export default AddOutfit;
