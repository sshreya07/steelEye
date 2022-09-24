import React, { useState, memo, useRef,useEffect } from 'react';
import PropTypes from 'prop-types';
import SingleListItem from './ListItem'

// List Component
const WrappedListComponent = ({ items }) => {
  const renderCount = useRef(0);
  const [selectedIndex, setSelectedIndex] = useState(false); /* first error caught: changing the positions of state variable and function => 1st argu: state variable and 2nd argu: function that updates the state variable */ /* Doing this will remove the error of useEffect missing dependencies */
  

  /** we can initialize the state variable directly in useEffect but that leads to unnecessary component re-rendering.*/
        useEffect(() => {
          setSelectedIndex(false);
        }, [items]); 
  /* useEffect Re-Renderes the component when items changes.*/

  /* This handle function is used to handle click event on each list item */
  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <>
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          isSelected={selectedIndex === index ? true : false}  /** selected index needs a check condition for comparing index of an item so that right item should be clicked and changes its color */
          key={index} /**each items of a list should need a key prop in order to identify them */
        />
      ))}
      </ul>
      <span className="dark:text-green-300 text-grey-900">
        Render Counts: {(renderCount.current++)} time(s)
      </span>
    </>
  )
};

/*An array of a certain type that type is An object taking on a particular shape 
items:[{text: "value of string type"},{text: },{text: }] */
WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({   
    text: PropTypes.string.isRequired,
  })),
};

/* default value of a props items is null that indicates that the items array would be null if no items array is passed as a prop through List Component. */ 
WrappedListComponent.defaultProps = {
  items: null
};


/**React.memo() is a higher-order component that we can use to wrap components that we do not want to re-render unless props within them change */
const List = (WrappedListComponent);

export default memo(List);

/**useMemo() is a React Hook that we can use to wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change */