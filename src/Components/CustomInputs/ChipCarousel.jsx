import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import useHorizontalScroll from "../../Utils/Hooks/useHorizontalScroll";

export default function ChipCarousel({ data, value, onClick }) {
  const sliderRef = useHorizontalScroll();
  const handleSlideLeft = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 200;
  };

  const handleSlideRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 200;
  };

  return (
    <div className="flex items-center w-full py-2">
      <button
        type="button"
        className="static m-0 text-primary3 mr-5"
        onClick={handleSlideLeft}
      >
        <Icon icon="ooui:previous-ltr" width={24} />
      </button>

      <div
        ref={sliderRef}
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar-1 hide-scrollbar-2 flex gap-3 text-sm"
      >
        {[{ label: "Semua", value: null }, ...data].map((item) => (
          <button
            key={item?.value}
            type="button"
            className={
              value === item?.value
                ? "border-2 border-[#016DB2] p-2 px-4 text-[#016DB2] bg-[#C9F3FB] rounded-md"
                : "border-2 p-2 px-4 text-darkGrey hover:bg-bg2 rounded-md"
            }
            onClick={() => onClick(item?.value)}
          >
            {item?.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="static m-0 text-primary3 ml-5 text-sm"
        onClick={handleSlideRight}
      >
        <Icon icon="ooui:previous-rtl" width={24} />
      </button>
    </div>
  );
}

ChipCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    }),
  ),
  value: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
};

ChipCarousel.defaultProps = {
  data: [],
  value: null,
  onClick: () => {},
};
