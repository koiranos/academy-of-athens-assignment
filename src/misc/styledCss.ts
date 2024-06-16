import { styled } from "styled-components";

interface InformationItemProps {
  $widthProp: string;
}

export const HorizontalSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

export const InformationItem = styled.div<InformationItemProps>`
  display: flex;
  flex-direction: column;
  width: ${(p) => p.$widthProp};
  height: 160px;
  justify-content: space-around;
`;

export const AcademiaLogo = styled.img`
  width: 100%;
  max-width: 276px;
  height: auto;
`;

export const SocialLinksContainer = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const SocialItem = styled.a`
  background-color: #f9f9f919;
  width: 48px;
  height: 48px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  img {
    width: 20px;
  }
`;

export const InformationItemTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const InformationItemText = styled.span`
  font-weight: 300;
  font-size: 16px;
`;

export const ExternalLink = styled.a`
  color: #fff;

  &:hover {
    color: #138cd3;
  }
`;

interface AnchorAsButtonProps {
  $isAlternativeThemeEnabled: boolean;
}

export const AnchorAsButton = styled.a<AnchorAsButtonProps>`
  width: 168px;
  height: 51px;
  border: ${(p) =>
    p.$isAlternativeThemeEnabled ? "1px solid #fff" : "1px solid #138cd399"};
  border-radius: 30px;
  display: block;
  margin-inline: auto;
  margin-top: 30px;
  color: ${(p) => (p.$isAlternativeThemeEnabled ? "#fff" : "#138cd3")};
  background-color: ${(p) =>
    p.$isAlternativeThemeEnabled ? "transparent" : undefined};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  line-height: 51px;

  &:hover {
    background-color: #138dd3e5;
    color: #fff;
    border: 1px solid #138cd399;
  }
`;
