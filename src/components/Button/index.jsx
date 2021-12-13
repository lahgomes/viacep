import PropTypes from 'prop-types'
import { FaSearchLocation } from "react-icons/fa";

const Button = ({ type = "button" }) => (
  <button 
    type={type}  
    className="search__button">
    <FaSearchLocation />
  </button>
)

Button.propTypes = {
  type: PropTypes.string
}

export default Button;
