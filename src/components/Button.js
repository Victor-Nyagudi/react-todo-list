import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {
    return (
        <button 
        onClick={onClick} 
        style={{backgroundColor: color}} 
        className="btn">
            {text}
        </button>
    )
};

Button.defaultProps = {
    text: "Add",
    color: "green"
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
