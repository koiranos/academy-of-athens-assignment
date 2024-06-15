import banner1 from "../assets/banner_1.jpeg";
import banner2 from "../assets/banner_2.jpeg";

import { styled } from "styled-components";
import { pageContent } from "../misc/data";
import CustomSectionText from "./CustomSectionText";
import CustomCarousel from "./CustomCarousel";
import CustomCardSlider from "./CustomCardSlider";

import { AnchorAsButton } from "../misc/styledCss";
import NewsCategoriesSection from "./newsCaategoriesSection";
import MoreInfoSection from "./moreInfoSection";

function ContentSection() {
  return (
    <div style={{ height: "fit-content" }}>
      <CustomCarousel />

      <CustomSectionText
        title={pageContent.home.welcome.title}
        text={pageContent.home.welcome.text}
      />
      <div style={{ maxWidth: "70%", margin: "80px auto" }}>
        <a href="#">
          <BannerImage src={banner1} />
        </a>
      </div>

      <div
        style={{
          backgroundColor: "#F9F9F9",
          width: "100%",
          paddingBottom: "20px",
        }}
      >
        <CustomSectionText
          isLineVisible={true}
          title={pageContent.home.research.title}
          text={pageContent.home.research.text}
        />
        <CustomCardSlider />
        <AnchorAsButton $isAlternativeThemeEnabled={false} href="#">
          {pageContent.home.research.buttonText}
        </AnchorAsButton>
      </div>

      <div style={{ width: "100%" }}>
        <CustomSectionText
          isLineVisible={true}
          title={pageContent.home.news.title}
        />

        <NewsCategoriesSection />

        <AnchorAsButton $isAlternativeThemeEnabled={false} href="#">
          {pageContent.home.research.buttonText}
        </AnchorAsButton>
      </div>

      <div style={{ marginTop: "50px" }}>
        <CustomSectionText
          isLineVisible={true}
          title={pageContent.home.more.title}
        />

        <MoreInfoSection />
      </div>

      <div style={{ maxWidth: "70%", margin: "80px auto" }}>
        <a href="#">
          <BannerImage src={banner2} />
        </a>
      </div>
    </div>
  );
}

export default ContentSection;

const BannerImage = styled.img`
  margin: 0 auto;
  width: 100%;
  height: auto;
`;
