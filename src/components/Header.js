import PropTypes from 'prop-types';
import Button from './Button';
import {useLocation} from 'react-router-dom';

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation();

    return (
        <header>
            <h1 className="header">{title}</h1>
            {location.pathname === "/" &&
            <Button 
                color={showAdd? "red" : "blueviolet"} 
                text={showAdd ? "Close" : "Add"} 
                onClick={onAdd}
            />}
        </header>
    )
};

Header.defaultProps = {
    title: "To-do List"
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

// const headingStyle = {
//     color: "blueviolet", 
//     backgroundColor: "black",
//     display: "inline",
//     margin : "10px",
//     borderRadius: "10px"
// };

export default Header
