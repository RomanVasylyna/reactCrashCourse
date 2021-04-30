import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onToggleForm }) => {

// Show/Hide Form for adding tasks
  const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <button
                className="btn"
                style={{ backgroundColor: color }}
                onClick={ () => onToggleForm() }
            >{text}</button>
        </div >
    )
}

// In case props were not passed from the parent component we define them here
Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
};

// Setting Props' default data types
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
