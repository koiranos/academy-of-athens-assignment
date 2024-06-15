// import Carousel from "react-multi-carousel";
import { Card } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-multi-carousel/lib/styles.css";
import { pageContent } from "../misc/data";

import researchHome from "../assets/research_image.png";

function CustomCardSlider() {
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <CustomNextArrowButton onClick={onClick}>
        <RightOutlined />
      </CustomNextArrowButton>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <CustomPrevArrowButton onClick={onClick}>
        <LeftOutlined />
      </CustomPrevArrowButton>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getCardItems = () => {
    return pageContent.home.research.centers.map((centerItem, id) => {
      return (
        <a key={`anchor_${id}`} href={centerItem.url}>
          <ResearchCard key={`card_${id}`}>
            <div
              style={{
                width: "108px",
                height: "108px",
                backgroundColor: "#dff2ff99",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "48px",
                  margin: "auto",
                }}
                src={researchHome}
              />
            </div>
            <span
              style={{
                height: "40px",
                color: "#1B4965",
              }}
            >
              {centerItem.title}
            </span>
          </ResearchCard>
        </a>
      );
    });
  };

  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <Slider {...settings}>{getCardItems()}</Slider>
    </div>
  );
}

export default CustomCardSlider;

const ResearchCard = styled(Card)`
  width: 242px;
  height: 270px;

  .ant-card-body {
    height: 100%;
    margin: 14px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
    align-items: center;
    text-align: center;
  }
`;

const CustomArrowButton = css`
  position: absolute;
  top: 46%;

  border-radius: 50%;
  text-align: center;
  line-height: 38px;

  width: 38px;
  height: 38px;
  z-index: 9000;
  cursor: pointer;

  color: white;
  background-color: #1b4965;
`;

const CustomNextArrowButton = styled.div`
  ${CustomArrowButton}
  right: 16px;
`;

const CustomPrevArrowButton = styled.div`
  ${CustomArrowButton}
  left: -16px;
`;
