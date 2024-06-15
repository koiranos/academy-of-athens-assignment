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
