import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ tittle, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{tittle}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close form' : 'Open form'}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  tittle: 'Clients'
};

Header.propTypes = {
  tittle: PropTypes.string.isRequired
};

/* const headingStyle = {
  color: 'red',
  backgroundColor: 'black'
}; */
export default Header;
