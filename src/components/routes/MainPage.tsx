import banner1 from "../../assets/banner_1.jpeg";
import banner2 from "../../assets/banner_2.jpeg";

import { styled } from "styled-components";
import SectionText from "../SectionText";
import CarouselWrapper from "../Carousel";
import CardSlider from "../CardSlider";

import { AnchorAsButton } from "../../misc/styledCss";
import NewsCategoriesSection from "../newsCategoriesSection";
import MoreInfoSection from "../moreInfoSection";
import { useContext } from "react";
import { PageDataContext } from "../context/contexts";

function MainPage() {
  const pageContent = useContext(PageDataContext);
  return (
    <div style={{ height: "fit-content" }}>
      <CarouselWrapper />

      <SectionText
        title={pageContent.home.welcome.title}
        text={pageContent.home.welcome.text}
      />
      <BannerImageContainer>
        <a href="#">
          <BannerImage src={banner1} />
        </a>
      </BannerImageContainer>

      <SectionContainer>
        <SectionText
          isLineVisible={true}
          title={pageContent.home.research.title}
          text={pageContent.home.research.text}
        />
        <CardSlider category={pageContent.home.research.centers} />
        <AnchorAsButton $isAlternativeThemeEnabled={false} href="#">
          {pageContent.home.research.buttonText}
        </AnchorAsButton>
      </SectionContainer>

      <div style={{ width: "100%" }}>
        <SectionText isLineVisible={true} title={pageContent.home.news.title} />

        <NewsCategoriesSection />

        <AnchorAsButton $isAlternativeThemeEnabled={false} href="#">
          {pageContent.home.research.buttonText}
        </AnchorAsButton>
      </div>

      <div style={{ marginTop: "50px" }}>
        <SectionText isLineVisible={true} title={pageContent.home.more.title} />

        <MoreInfoSection />
      </div>

      <BannerImageContainer>
        <a href="#">
          <BannerImage src={banner2} />
        </a>
      </BannerImageContainer>

      <SectionContainer>
        <SectionText
          isLineVisible={true}
          title={pageContent.home.editions.title}
          text={pageContent.home.editions.text}
        />
        <CardSlider category={pageContent.home.editions.books} />
        <AnchorAsButton $isAlternativeThemeEnabled={false} href="#">
          {pageContent.home.research.buttonText}
        </AnchorAsButton>
      </SectionContainer>
    </div>
  );
}

export default MainPage;

const BannerImageContainer = styled.div`
  max-width: 70%;
  margin: 80px auto;
`;

const BannerImage = styled.img`
  margin: 0 auto;
  width: 100%;
  height: auto;
`;

const SectionContainer = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  padding-bottom: 20px;
`;
