import axios from "axios";

export const getMenuData = async () => {
  return await axios
    .get("https://academyofathens-latest-cms.dotsoft.gr/api/el/menu/main")
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export const getPublicationsData = async () => {
  return await axios
    .get("https://academyofathens-latest-cms.dotsoft.gr/api/el/publications")
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};
