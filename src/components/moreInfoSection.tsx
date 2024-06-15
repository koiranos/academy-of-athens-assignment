import styled from "styled-components";
import { pageContent } from "../misc/data";
import MoreInfoItem from "./moreInfoItem";

function MoreInfoSection() {
  const getMoreInfoItems = () => {
    return pageContent.home.more.items.map((item, id) => {
      return (
        <MoreInfoItem
          key={`more_info_item_${id}`}
          title={item.title}
          buttonText={item.buttonText}
          image={item.image}
          url={item.url}
        />
      );
    });
  };

  return (
    <MoreInfoSectionContainer>{getMoreInfoItems()}</MoreInfoSectionContainer>
  );
}

export default MoreInfoSection;

const MoreInfoSectionContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
