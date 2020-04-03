import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddOutfit = ({ addOutfitHandler }) => {
  return (
    <button
      type="button"
      data-testid="your-outfit"
      className="related-card add-outfit-card"
      onClick={addOutfitHandler}
    >
      <div>
        <div className="add-outfit-card-inner">
          <FontAwesomeIcon className="plus" icon={faPlus} />
          <div className="add-outfit-title">
            <p>Add to Outfit</p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default AddOutfit;
