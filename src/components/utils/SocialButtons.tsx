import * as infoStyles from "../../misc/styledCss";
import facebookIcon from "../../assets/facebook.svg";
import { InstagramOutlined, YoutubeFilled } from "@ant-design/icons";

function SocialButtons() {
  return (
    <infoStyles.SocialLinksContainer>
      <infoStyles.SocialItem to="https://facebook.com" target="_blank">
        <img src={facebookIcon} />
      </infoStyles.SocialItem>
      <infoStyles.SocialItem to="https://instagram.com" target="_blank">
        <InstagramOutlined />
      </infoStyles.SocialItem>
      <infoStyles.SocialItem to="https://youtube.com" target="_blank">
        <YoutubeFilled />
      </infoStyles.SocialItem>
    </infoStyles.SocialLinksContainer>
  );
}

export default SocialButtons;
