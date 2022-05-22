import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({children, type, version}) => {
  return (
    <button className={`btn btn-${version}`} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: 'default',
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
