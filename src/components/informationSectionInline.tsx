import { Collapse, Divider } from "antd";
import { styled } from "styled-components";

import * as infoStyles from "../misc/styledCss";
import academiaLogo from "../assets/akadimia_Logo.png";
import { useContext } from "react";
import { PageDataContext } from "./context/contexts";
import SocialButtons from "./utils/SocialButtons";
import { Link } from "react-router-dom";

function InformationSectionInline() {
  const pageContent = useContext(PageDataContext);
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
        <Link to="/">
          <infoStyles.AcademiaLogo src={academiaLogo} />
        </Link>
        <SocialButtons />
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
