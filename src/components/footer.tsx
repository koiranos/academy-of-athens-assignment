import { styled } from "styled-components";

import espaLogo from "../assets/espa.png";
import { useWindowSize } from "../misc/useWIndowSize";
import InformationSectionHorizontal from "./informationSectionHorizontal";
import InformationSectionInline from "./informationSectionInline";

import { pageContent } from "../misc/data";

function FooterSection() {
  const menuMode = useWindowSize("horizontal");
  return (
    <div>
      <InformationSectionContainer $menuType={menuMode}>
        {menuMode === "horizontal" ? (
          <InformationSectionHorizontal />
        ) : (
          <InformationSectionInline />
        )}
      </InformationSectionContainer>
      <EspaSection>
        <EspaLogo src={espaLogo} />
      </EspaSection>
      <AllRightsReservedSection>
        {pageContent.footer.reserved}
      </AllRightsReservedSection>
    </div>
  );
}

export default FooterSection;

interface InformationSectionProps {
  $menuType: string;
}

const AllRightsReservedSection = styled.div`
  background-color: #003049;
  height: 57px;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 57px;
  text-align: center;
`;

const EspaSection = styled.div`
  width: fit-content;
  height: 76px;
  margin: 0 auto;
  line-height: 76px;
`;

const EspaLogo = styled.img`
  width: 100%;
  max-width: 255px;
  height: auto;
`;

const InformationSectionContainer = styled.div<InformationSectionProps>`
  background-color: #1b4965;
  color: #fff;
  width: 100%;
  height: ${(p) => (p.$menuType === "horizontal" ? "250px" : "fit-content")};
`;
