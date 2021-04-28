import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {

    return (
        <div>
         <button 
         className="btn" 
         style={ {backgroundColor : color} }
         onClick={ e => onClick(e) }
         >{ text }</button>
        </div>
    )
}

// In case props were not passed from the parent component we define them here
Button.defaultProps = {
color: 'steelblue',
text: 'Add'
};

// Setting Props' default data types
Button.propTypes = {
color : PropTypes.string, 
text : PropTypes.string,  
onClick : PropTypes.func,   
}

export default Button
