import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({children, type, version, isDisabled, onClick}) => {
  return (
    <button
      className={`btn btn-${version}`}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: 'default',
  type: 'button',
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
