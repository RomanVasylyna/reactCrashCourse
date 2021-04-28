import Button from './Button';

const Header = () => {

    const onClick = e => {
        alert(e.currentTarget.innerHTML);
        };

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button onClick={onClick}/>
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
// background:"black"
// }

// Then we add this variable to the style attr like this : style={ headingStyle }

export default Header;
