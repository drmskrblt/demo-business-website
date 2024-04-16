import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import carouselItems from "../data/carouselData";

const CarouselComponent = () => {
  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <div key={index} className="relative h-[500px] w-full my-2">
          <img
            src={item.image}
            alt={item.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {item.heading}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {item.description}
              </Typography>
              <div className="flex justify-center gap-2">
                <Link to="/service">
                  <Button size="lg" color="white">
                    {item.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
