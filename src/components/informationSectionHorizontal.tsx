import { pageContent } from "../misc/data";

import * as infoStyles from "../misc/styledCss";
import academiaLogo from "../assets/akadimia_Logo.png";

function InformationSectionHorizontal() {
  const handleInfoListItems = () => {
    return pageContent.footer.info.list.map((item, id) => {
      return (
        <infoStyles.InformationItemText key={`item_text_${id}`}>
          <infoStyles.ExternalLink href={item.url}>
            {item.title}
          </infoStyles.ExternalLink>
        </infoStyles.InformationItemText>
      );
    });
  };

  return (
    <infoStyles.HorizontalSection>
      <infoStyles.InformationItem $widthProp="240px">
        <infoStyles.AcademiaLogo src={academiaLogo} />
        <infoStyles.SocialLinksContainer>
          <infoStyles.SocialItem />
          <infoStyles.SocialItem />
          <infoStyles.SocialItem />
        </infoStyles.SocialLinksContainer>
      </infoStyles.InformationItem>
      <infoStyles.InformationItem $widthProp="260px">
        <infoStyles.InformationItemTitle>
          {pageContent.footer.contact.title}
        </infoStyles.InformationItemTitle>
        <infoStyles.InformationItemText>
          {pageContent.footer.contact.address}
        </infoStyles.InformationItemText>
        <infoStyles.InformationItemText>
          {pageContent.footer.contact.phone}
        </infoStyles.InformationItemText>
        <infoStyles.InformationItemText>
          {pageContent.footer.contact.fax}
        </infoStyles.InformationItemText>
        <infoStyles.InformationItemText>
          {pageContent.footer.contact.email}
        </infoStyles.InformationItemText>
      </infoStyles.InformationItem>
      <infoStyles.InformationItem $widthProp="260px">
        <infoStyles.InformationItemTitle>
          {pageContent.footer.info.title}
        </infoStyles.InformationItemTitle>
        {handleInfoListItems()}
      </infoStyles.InformationItem>
    </infoStyles.HorizontalSection>
  );
}

export default InformationSectionHorizontal;

// interface infoStyles.InformationItemProps {
//   $widthProp: string;
// }

// const infoStyles.HorizontalSection = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   align-items: center;
//   gap: 10px;
// `;

// const infoStyles.InformationItem = styled.div<infoStyles.InformationItemProps>`
//   display: flex;
//   flex-direction: column;
//   width: ${(p) => p.$widthProp};
//   height: 160px;
//   justify-content: space-around;
// `;

// const infoStyles.AcademiaLogo = styled.img`
//   width: 100%;
//   max-width: 276px;
//   height: auto;
// `;

// const infoStyles.SocialLinksContainer = styled.div`
//   /* width: 100%; */
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   gap: 20px;
// `;

// const infoStyles.SocialItem = styled.div`
//   background-color: #f9f9f919;
//   width: 48px;
//   height: 48px;
//   border-radius: 40px;
// `;

// const infoStyles.InformationItemTitle = styled.span`
//   font-weight: 600;
//   font-size: 18px;
// `;

// const infoStyles.InformationItemText = styled.span`
//   font-weight: 300;
//   font-size: 16px;
// `;

// const ExternalLink = styled.a`
//   text-decoration: none;
//   color: #fff;

//   &:hover {
//     color: #138cd3;
//   }
// `;
