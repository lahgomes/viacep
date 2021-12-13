import PropTypes from 'prop-types'

const Input = ({ type = "text", id, placeholder, ...props }) => (
  <input
    type={type}
    id={id}
    name={id}
    placeholder={placeholder}
    {...props}
    className="search__input"
  />
)

/* Input.defaultProps = {
  type: "text"
} */

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string  
}

export default Input;
