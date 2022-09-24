import React, { memo, useRef } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {

  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red', width: '50%', padding:'2rem', margin: '1rem', borderRadius: '2em', color: 'white', fontSize:'20px'}}
      onClick={onClickHandler} key={index}
    >
      {text}
     
      </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};


const SingleListItem = memo(WrappedSingleListItem);

export default SingleListItem;