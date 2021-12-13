import PropTypes from 'prop-types'

const Label = ({ text, id }) => (
  <label htmlFor={id} className="search__label">
    {text}
  </label>
)

Label.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Label;
