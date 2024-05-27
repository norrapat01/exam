import "./ImageSlider.css";

export const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        &#9664;
      </div>
    );
  };
  
export const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        &#9654;
      </div>
    );
  };
  