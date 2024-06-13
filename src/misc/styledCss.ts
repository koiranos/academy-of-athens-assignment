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

export const SocialItem = styled.div`
  background-color: #f9f9f919;
  width: 48px;
  height: 48px;
  border-radius: 40px;
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
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #138cd3;
  }
`;
