import academiaLogo from "../assets/akadimia_Logo.png";
import NavigationBar from "./navigationBar";

function HeaderSection() {
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
      <NavigationBar />
    </div>
  );
}

export default HeaderSection;
