import { Carousel } from "antd";
import { styled } from "styled-components";

import img1 from "../assets/home_page_img_1.jpeg";
import img2 from "../assets/home_page_img_2.jpeg";
import img3 from "../assets/home_page_img_4.jpeg";

function CarouselWrapper() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <Carousel
      afterChange={onChange}
      autoplay
      draggable
      autoplaySpeed={5000}
      fade
    >
      <div>
        <CarouselItem src={img1} />
      </div>
      <div>
        <CarouselItem src={img2} />
      </div>
      <div>
        <CarouselItem src={img3} />
      </div>
    </Carousel>
  );
}

export default CarouselWrapper;

const CarouselItem = styled.img`
  margin: 0;
  width: 100%;
  height: 480px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
  object-fit: cover;
`;
