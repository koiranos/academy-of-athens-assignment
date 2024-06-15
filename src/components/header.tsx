import { useEffect, useState } from "react";
import academiaLogo from "../assets/akadimia_Logo.png";
import NavigationBar from "./navigationBar";
import axios from "axios";

function HeaderSection() {
  const [mainData, setMainData] = useState<any>();

  const getMenuData = async () => {
    const data = await axios
      .get("https://academyofathens-latest-cms.dotsoft.gr/api/el/menu/main")
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });

    setMainData(data);
  };

  useEffect(() => {
    getMenuData();
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "#003049" }}>
        <div
          style={{
            width: "fit-content",
            height: "100px",
            margin: "0 auto",
            lineHeight: "100px",
          }}
        >
          <img
            src={academiaLogo}
            style={{ width: "100%", maxWidth: "264px", height: "auto" }}
          />
        </div>
      </div>
      <NavigationBar navData={mainData} />
    </div>
  );
}

export default HeaderSection;
