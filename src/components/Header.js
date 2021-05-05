import Button from './Button';

const Header = ({ onToggleForm, showForm }) => {

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button onToggleForm={ onToggleForm } 
            showForm={ showForm }
            color={ showForm ? 'red' : 'green'}
            text={showForm ? 'Close' : 'Add'}
            />
        </header>
    )
}

//If props are not passed from the parent component then we can define them here
// Header.defaultProps = {
//     title: 'Hello',
// };

// Here we can define and hardcode the potential props data types
// Even if we pass title as a Number it will still be a string as defined here
// Header.propTypes = {
//     title: PropTypes.string.isRequired, //If the prop will be missing it will give an error
// }

// Some of the ways of adding css to the app
// const headingStyle = {
// color:"red",
// backgroundColor:"red"
// }

// Then we add this variable to the style attr like this : style={ headingStyle }

export default Header;
