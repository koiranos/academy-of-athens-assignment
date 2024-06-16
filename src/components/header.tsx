import { styled } from "styled-components";
import academiaLogo from "../assets/akadimia_Logo.png";
import NavigationBar from "./navigationBar";

function HeaderSection() {
  return (
    <div>
      <div style={{ backgroundColor: "#003049" }}>
        <BrandSectionContainer>
          <a href="/">
            <BrandLogo src={academiaLogo} />
          </a>
        </BrandSectionContainer>
      </div>
      <NavigationBar />
    </div>
  );
}

export default HeaderSection;

const BrandSectionContainer = styled.div`
  width: fit-content;
  height: 100px;
  margin: 0 auto;
  line-height: 100px;
`;

const BrandLogo = styled.img`
  width: 100%;
  max-width: 264px;
  height: auto;
`;
