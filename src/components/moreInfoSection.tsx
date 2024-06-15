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
    <div
      style={{
        width: "70%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {getMoreInfoItems()}
    </div>
  );
}

export default MoreInfoSection;
