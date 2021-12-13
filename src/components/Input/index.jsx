import PropTypes from 'prop-types'

const Input = ({ type = "text", id, placeholder, value, handleChangeCep, ...props }) => (
  <input
    type={type}
    id={id}
    name={id}
    placeholder={placeholder}
    value={value}
    onChange={({ target }) => handleChangeCep(target)}
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
  placeholder: PropTypes.string,
  handleChangeCep: PropTypes.func.isRequired
}

export default Input;
