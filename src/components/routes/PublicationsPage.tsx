import { styled } from "styled-components";
import { useContext } from "react";
import { Collapse } from "antd";
import { useWindowSize } from "../../misc/useWindowSize";
import { PublicationsContext, PageDataContext } from "../context/contexts";
import NoData from "../utils/NoData";

function PublicationsPage() {
  const publicationsData = useContext(PublicationsContext);
  const pageContent = useContext(PageDataContext);

  const menuMode = useWindowSize("horizontal");

  const stripHtml = (html: string) => {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const handlePublicationItems = () => {
    if (publicationsData) {
      return publicationsData.nodes.map((node: any) => {
        return {
          key: `pn_${node.id}`,
          label: <span>{node.title}</span>,
          children: (
            <NodeContainer>
              <div>
                {node.image.length > 0 ? (
                  <NodeImage
                    src={node.image.length > 0 ? node.image[0].url : ""}
                  />
                ) : (
                  <NoData text="Μη Διαθέσιμη Εικόνα" />
                )}
              </div>
              <NodeDescription>
                <p>
                  <span style={{ fontWeight: "600" }}>Συγγραφέας:</span>{" "}
                  {node.author}
                </p>
                <p style={{ textIndent: "20px", textAlign: "justify" }}>
                  {stripHtml(node.body)}
                </p>
              </NodeDescription>
            </NodeContainer>
          ),
        };
      });
    } else {
      return [];
    }
  };

  const getSubMenuItems = () => {
    const menu = JSON.parse(localStorage.getItem("selectedMenuItem") ?? "");
    const selectedId = menu.selectedId;
    return menu.submenu.map(
      (menuItem: {
        id: number;
        name: string;
        parent: number;
        side_menu: boolean;
        submenu: {}[];
        url: string;
        weight: number;
        selectedId: number;
      }) => {
        return (
          <NavigationItem
            $active={selectedId === menuItem.id ? true : false}
            style={{}}
            key={`sm_${menuItem.id}`}
          >
            {menuItem.name}
          </NavigationItem>
        );
      }
    );
  };

  return (
    <PublicationsContainer>
      {menuMode === "horizontal" && (
        <NavigationSection>{getSubMenuItems()}</NavigationSection>
      )}
      <DataPreview>
        <CustomTitle>{pageContent.publications.print.title}</CustomTitle>
        <CollapsiblePublications
          expandIconPosition="end"
          style={{ borderRadius: 0 }}
          accordion={true}
          bordered={false}
          size="large"
          items={handlePublicationItems()}
        />
      </DataPreview>
    </PublicationsContainer>
  );
}

export default PublicationsPage;

const PublicationsContainer = styled.div`
  width: 70%;
  height: fit-content;
  padding-block: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
`;
const NavigationSection = styled.div`
  margin-top: 100px;
  width: 161px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

interface NavigationItemProps {
  $active: boolean;
}

const NavigationItem = styled.h3<NavigationItemProps>`
  height: 56px;
  font-size: 16px;
  font-weight: 600;

  padding-left: 20px;
  border-left: ${(p) => (p.$active ? "2px solid #138cd3" : undefined)};
  color: ${(p) => (p.$active ? "#138cd3" : "#122f40e5")};
`;

const DataPreview = styled.div`
  width: 900px;
`;

const CustomTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  color: #1b4965;
`;

const CollapsiblePublications = styled(Collapse)`
  margin-top: 50px;
  border-bottom: 1px solid #d9d9d9;
  .ant-collapse-item {
  }
  .ant-collapse-header {
    background-color: #fff !important;
  }
  .ant-collapse-header-text {
    font-size: 16px;
    color: #1b4965;
  }
`;

const NodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const NodeImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
`;

const NodeDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
