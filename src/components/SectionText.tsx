import { styled } from "styled-components";

interface CustomSectionTextProps {
  isLineVisible?: boolean;
  title: string;
  text?: string;
}

function SectionText({
  isLineVisible = false,
  title,
  text = "",
}: CustomSectionTextProps) {
  return (
    <SectionTextContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
        }}
      >
        <SectionTitle $isLivePresent={isLineVisible}>
          {title}
          {isLineVisible && <LineDetail></LineDetail>}
        </SectionTitle>
      </div>
      {text.length > 0 && <SectionSubText>{text}</SectionSubText>}
    </SectionTextContainer>
  );
}

export default SectionText;

interface SectionTitleProps {
  $isLivePresent: boolean;
}

const SectionTextContainer = styled.div`
  text-align: center;
  width: 70%;
  margin: 0 auto;
  color: #1b4965;
  padding-block: 32px;
`;

const SectionTitle = styled.p<SectionTitleProps>`
  position: relative;
  width: fit-content;
  margin: 0 auto;
  font-size: 36px;
  line-height: 48px;
  margin-bottom: 1rem;
`;

const SectionSubText = styled.p`
  font-size: 16px;
  line-height: 32px;
  width: 90%;
  margin: auto;
`;

const LineDetail = styled.span`
  width: 100px;
  border-bottom: 2px solid #138cd3;
  position: absolute;
  bottom: -6px;
  left: 0;
`;
