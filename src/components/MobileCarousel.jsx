import Slider from "react-slick";
import { Link } from "react-router-dom";

const MobileCarousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // arrows
  };

  const carouselSTYLE = {
    carouselContainer: `w-full h-[600px] grid grid-cols-2 bg-white shadow-lg my-4`,
    carouselImage: `grid-span-1 w-full h-[250px] object-cover`,
    carouselBottom: `grid-span-1 p-4 flex flex-col items-center text-center overflow-auto`,
    carouselHeading: `text-3xl font-semibold text-gray-800`,
    carouselDescription: `flex-grow text-lg py-2 text-gray-700 overflow-hidden`,
    carouselButton: `px-4 py-2 text-white bg-black rounded`,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className={carouselSTYLE.carouselContainer}>
          <img
            className={carouselSTYLE.carouselImage}
            src={item.image}
            alt={item.alt}
          />
          <div className={carouselSTYLE.carouselBottom}>
            <h1 className={carouselSTYLE.carouselHeading}>{item.heading}</h1>
            <p className={carouselSTYLE.carouselDescription}>
              {item.description}
            </p>
            <Link to="/service">
              <button className={carouselSTYLE.carouselButton}>
                {item.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MobileCarousel;
