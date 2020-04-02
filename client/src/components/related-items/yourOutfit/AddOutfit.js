import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon className="plus" icon={faPlus} />
          <div className="">
            <p style={{ color: 'rgb(93, 93, 93)' }}>Add to Outfit</p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default AddOutfit;
