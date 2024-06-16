import { Card } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import researchHome from "../assets/research_image.png";
import { Link } from "react-router-dom";

interface CardSliderProps {
  category: { title: string; url: string; image?: string }[];
}

function CardSlider({ category }: CardSliderProps) {
  const SampleNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <CustomNextArrowButton onClick={onClick}>
        <RightOutlined />
      </CustomNextArrowButton>
    );
  };

  const SamplePrevArrow = (props: any) => {
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
    return category.map((cardItem, id) => {
      return (
        <Link key={`anchor_${id}`} to={cardItem.url}>
          <CardWrapper
            $hasImage={cardItem.image !== undefined}
            key={`card_${id}`}
          >
            {cardItem.image !== undefined ? (
              <CardImage src={cardItem.image} />
            ) : (
              <ImageContainer>
                <AlternativeImage src={researchHome} />
              </ImageContainer>
            )}
            <CardTitle>{cardItem.title}</CardTitle>
          </CardWrapper>
        </Link>
      );
    });
  };

  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <Slider {...settings}>{getCardItems()}</Slider>
    </div>
  );
}

export default CardSlider;

interface ResearchCardProps {
  $hasImage: boolean;
}

const CardWrapper = styled(Card)<ResearchCardProps>`
  width: 242px;
  height: 270px;

  .ant-card-body {
    height: 100%;
    margin: ${(p) => (p.$hasImage ? "-15px auto 0 auto" : "14px auto;")}
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
    align-items: center;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  width: 108px;
  height: 108px;
  background-color: #dff2ff99;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;

const AlternativeImage = styled.img`
  width: 48px;
  margin: auto;
`;

const CardImage = styled.img`
  width: 180px;
  height: 180px;
  // object-fit: cover;
`;

const CardTitle = styled.div`
  height: 40px;
  color: #1b4965;
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
