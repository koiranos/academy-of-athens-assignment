import styled, { css } from "styled-components";
import { Segmented } from "antd";
import { useContext, useEffect, useState } from "react";
import NoData from "./utils/NoData";
import { PageDataContext } from "./context/contexts";
import { Link } from "react-router-dom";

function NewsCategoriesSection() {
  const pageContent = useContext(PageDataContext);
  const [selectedSegment, setSelectedSegment] = useState<
    "events" | "lectures" | "announcements"
  >("lectures");
  const [selectedCategoryItems, setSelectedCategoryItems] = useState(
    pageContent.home.news.items[selectedSegment]
  );

  useEffect(() => {
    setSelectedCategoryItems(pageContent.home.news.items[selectedSegment]);
  }, [selectedSegment]);

  const getPreviewNewsItems = () => {
    const previewItems = [];
    for (
      let newsItemIndex = 1;
      newsItemIndex < selectedCategoryItems.length;
      newsItemIndex++
    ) {
      if (newsItemIndex !== 0) {
        previewItems.push(
          <PreviewItemContainer key={`news_item_container_${newsItemIndex}`}>
            <PreviewNewsItemImage
              key={`news_item_image_${newsItemIndex}`}
              src={selectedCategoryItems[newsItemIndex].image}
            />
            <div
              key={`news_item_group_container_${newsItemIndex}`}
              style={{ marginLeft: "12px" }}
            >
              <NewsItemTag
                key={`news_item_tag_${newsItemIndex}`}
                style={{ marginBottom: "10px" }}
              >
                {selectedCategoryItems[newsItemIndex].tag}
              </NewsItemTag>
              <NewsItemTitle key={`news_item_title_${newsItemIndex}`}>
                {selectedCategoryItems[newsItemIndex].title}
              </NewsItemTitle>
              <NewsItemDate key={`news_item_date_${newsItemIndex}`}>
                {selectedCategoryItems[0].date}
              </NewsItemDate>
            </div>
          </PreviewItemContainer>
        );
      }
    }
    return previewItems;
  };
  return (
    <>
      <NewsCategories
        size="large"
        options={pageContent.home.news.categories}
        defaultValue={selectedSegment}
        onChange={(
          value: "events" | "lectures" | "announcements" | unknown
        ) => {
          if (
            value === "events" ||
            value === "lectures" ||
            value === "announcements"
          ) {
            setSelectedSegment(value);
          }
        }}
      />

      <NewsItemsContainer>
        {selectedCategoryItems.length > 0 ? (
          <>
            <DetailedNewsItem>
              <DetailedNewsItemImage
                src={`${selectedCategoryItems[0].image}`}
              />
              <NewsItemTag>{selectedCategoryItems[0].tag}</NewsItemTag>
              <NewsItemTitle>{selectedCategoryItems[0].title}</NewsItemTitle>
              <NewsItemDate>{selectedCategoryItems[0].date}</NewsItemDate>
              <DetailedNewsItemSummary>
                {selectedCategoryItems[0].summary}
              </DetailedNewsItemSummary>
              <DetailedNewsItemReadMore to="/">
                {pageContent.home.news.readMoreButtonText}
              </DetailedNewsItemReadMore>
            </DetailedNewsItem>
            <PreviewNewsItems>{getPreviewNewsItems()}</PreviewNewsItems>
          </>
        ) : (
          <NoData text="Δεν υπάρχουν δεδομένα για αυτήν την κατηγορία" />
        )}
      </NewsItemsContainer>
    </>
  );
}

export default NewsCategoriesSection;

const PreviewItemContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: row;
`;

const NewsCategories = styled(Segmented)`
  border-radius: 52px !important;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: fit-content;

  .ant-segmented-group {
    width: 522px !important;
    height: 52px !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff23;
    border-radius: 52px;
  }
  .ant-segmented-item {
    width: 184px;
    height: 52px;
    border-radius: 50px !important;
    transition: #138cd3 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-segmented-item-label {
    line-height: 52px !important;
  }
  .ant-segmented-item-selected {
    border-radius: 50px !important;
    background-color: #138cd3;
    color: #fff;
    border: 1px solid #fff;
  }
  .ant-segmented-thumb {
    background-color: #36b2f9;
    border-radius: 50px !important;
  }
`;

const NewsItemsContainer = styled.div`
  width: 66%;
  height: fit-content;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailedNewsItem = styled.div`
  width: 404px;
  height: 614px;
`;

const NewsItemImage = css`
  block-size: auto;
  object-fit: cover;
`;

const DetailedNewsItemImage = styled.img`
  ${NewsItemImage}
  max-inline-size: 100%;
  aspect-ratio: 4/3;
`;

const NewsItemBaseStyles = css`
  font-size: 14px;
  font-weight: 400;
`;

const NewsItemTag = styled.p`
  margin: 8px 0 4px 0;
  ${NewsItemBaseStyles}
  color: #138cd3;
`;

const NewsItemTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 29.96px;
  color: #122f40;
`;

const NewsItemDate = styled.p`
  ${NewsItemBaseStyles}
  line-height: 24px;
  color: #122f4099;
`;

const DetailedNewsItemSummary = styled.p`
  ${NewsItemBaseStyles}
  line-height: 24px;
  color: #122f40e5;
`;

const DetailedNewsItemReadMore = styled(Link)`
  ${NewsItemBaseStyles}
  line-height: 14px;
  color: #138cd3;
`;

const PreviewNewsItems = styled.div`
  width: 576px;
  height: 614px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PreviewNewsItemImage = styled.img`
  ${NewsItemImage}
  max-inline-size: 40%;
  block-size: 100%;
  aspect-ratio: 2/1;
`;
