import { Collapse, Divider } from "antd";
import { styled } from "styled-components";

import { pageContent } from "../misc/data";

import * as infoStyles from "../misc/styledCss";
import academiaLogo from "../assets/akadimia_Logo.png";

function InformationSectionInline() {
  const handleInfoListItems = () => {
    return pageContent.footer.info.list.map((item, id) => {
      return (
        <InformationItemText key={`item_text_${id}`}>
          <infoStyles.ExternalLink href={item.url}>
            {item.title}
          </infoStyles.ExternalLink>
        </InformationItemText>
      );
    });
  };

  return (
    <>
      <InformationItem>
        <infoStyles.AcademiaLogo src={academiaLogo} />
        <infoStyles.SocialLinksContainer>
          <infoStyles.SocialItem />
          <infoStyles.SocialItem />
          <infoStyles.SocialItem />
        </infoStyles.SocialLinksContainer>
      </InformationItem>
      <CustomDivider />
      <CollapsibleInfo
        style={{ borderRadius: 0 }}
        accordion={true}
        bordered={false}
        size="small"
        items={[
          {
            key: "1",
            label: (
              <InformationItemTitle>
                {pageContent.footer.contact.title}
              </InformationItemTitle>
            ),
            children: (
              <InformationItemContent>
                <InformationItemText>
                  {pageContent.footer.contact.address}
                </InformationItemText>
                <InformationItemText>
                  {pageContent.footer.contact.phone}
                </InformationItemText>
                <InformationItemText>
                  {pageContent.footer.contact.fax}
                </InformationItemText>
                <InformationItemText>
                  {pageContent.footer.contact.email}
                </InformationItemText>
              </InformationItemContent>
            ),
          },
          {
            key: "2",
            label: (
              <InformationItemTitle>
                {pageContent.footer.info.title}
              </InformationItemTitle>
            ),
            children: (
              <InformationItemContent>
                {handleInfoListItems()}
              </InformationItemContent>
            ),
          },
        ]}
      />
    </>
  );
}

export default InformationSectionInline;

const InformationItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-around;
  align-items: center;
`;

const InformationItemTitle = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #fff;
`;

const InformationItemText = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #fff;
`;

const InformationItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollapsibleInfo = styled(Collapse)`
  .ant-collapse-content-box {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .ant-collapse-expand-icon {
    color: #fff;
  }
`;

const CustomDivider = styled(Divider)`
  background: rgba(255, 255, 255, 0.2);
  margin: 0;
  margin-block: 8px;
`;
