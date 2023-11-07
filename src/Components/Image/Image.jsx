import PropTypes from "prop-types";
import NoPicture from "../Assets/Pictures/NoPicture.jpg";

export default function Image({ className, alt, img, style }) {
  if (!img) {
    return (
      <img
        src={NoPicture}
        alt={alt}
        className={className}
        style={style}
        loading="lazy"
      />
    );
  }

  return (
    <img
      src={img}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
    />
  );
}

Image.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object]),
  alt: PropTypes.string,
  img: PropTypes.string,
};

Image.defaultProps = {
  className: "",
  alt: "",
  style: {},
  img: "",
};
