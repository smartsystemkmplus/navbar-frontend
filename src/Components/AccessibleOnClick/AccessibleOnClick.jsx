import PropTypes from "prop-types";

export default function AccessibleOnClick(props) {
  const { onClick, children, disabled } = props;

  const filterKeyEnter = (e, callback) => {
    if (e.keyCode === 13) {
      callback();
    }
  };

  if (disabled) return children;

  return (
    <div
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      role="button"
      onKeyDown={(e) => filterKeyEnter(e, onClick)}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

AccessibleOnClick.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
};

AccessibleOnClick.defaultProps = {
  disabled: false,
};
