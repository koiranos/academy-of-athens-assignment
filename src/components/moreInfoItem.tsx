import { styled } from "styled-components";
import { AnchorAsButton } from "../misc/styledCss";

interface MoreInfoItemProps {
  title: string;
  buttonText: string;
  image: string;
  url: string;
}

function MoreInfoItem({ title, buttonText, image, url }: MoreInfoItemProps) {
  return (
    <MoreInfoItemContainer>
      <div style={{ position: "absolute", left: "48%", top: "35%" }}>
        <div
          style={{
            position: "relative",
            left: "-50%",
            top: "-35%",
            border: "dotted red 1px",
            color: "white",
            zIndex: "9999",
          }}
        >
          <div style={{ width: "168px" }}>
            <p
              style={{
                fontSize: "28px",
                textAlign: "center",
              }}
            >
              {title}
              {/* {pageContent.home.more.items[0].title} */}
            </p>
            <AnchorAsButton $isAlternativeThemeEnabled={true} href={url}>
              {buttonText}
              {/* {pageContent.home.more.items[0].buttonText} */}
            </AnchorAsButton>
          </div>
        </div>
      </div>
      <BaseImage src={image}></BaseImage>
    </MoreInfoItemContainer>
  );
}

export default MoreInfoItem;

const BaseImage = styled.img`
  block-size: auto;
  object-fit: cover;
  max-inline-size: 100%;
  aspect-ratio: 3/3.64;
`;

const MoreInfoItemContainer = styled.div`
  position: relative;
  width: 330px;
  height: 400px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1b496572;
  }
`;
