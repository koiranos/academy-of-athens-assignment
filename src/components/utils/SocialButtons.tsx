import * as infoStyles from "../../misc/styledCss";
import facebookIcon from "../../assets/facebook.svg";
import { InstagramOutlined, YoutubeFilled } from "@ant-design/icons";

function SocialButtons() {
  return (
    <infoStyles.SocialLinksContainer>
      <infoStyles.SocialItem href="https://facebook.com" target="_blank">
        <img src={facebookIcon} />
      </infoStyles.SocialItem>
      <infoStyles.SocialItem href="https://instagram.com" target="_blank">
        <InstagramOutlined />
      </infoStyles.SocialItem>
      <infoStyles.SocialItem href="https://youtube.com" target="_blank">
        <YoutubeFilled />
      </infoStyles.SocialItem>
    </infoStyles.SocialLinksContainer>
  );
}

export default SocialButtons;
