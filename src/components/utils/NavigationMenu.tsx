import { styled } from "styled-components";
import { useWindowSize } from "../../misc/useWindowSize";
import { Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { MenuContext } from "../context/contexts";

function NavigationMenu() {
  const menuMode = useWindowSize("horizontal");
  const navData = useContext(MenuContext);

  const getMenuItems = () => {
    if (navData) {
      return navData.items.map((item: any) => {
        return {
          label:
            item.submenu.length > 0 ? (
              <CustomMenuItem
              // href={item.url}
              >
                {item.name} <DownOutlined />
              </CustomMenuItem>
            ) : (
              <CustomMenuItem
                href={item.url}
                onClick={() => {
                  localStorage.setItem(
                    "selectedMenuItem",
                    JSON.stringify({ ...item, selectedId: item.id })
                  );
                }}
              >
                {item.name}
              </CustomMenuItem>
            ),
          key: `m_${item.id}`,
          theme: "light",
          children: item.submenu.map((subItem: any) => {
            return {
              label: (
                <CustomMenuItem
                  href={subItem.url}
                  onClick={() => {
                    localStorage.setItem(
                      "selectedMenuItem",
                      JSON.stringify({ ...item, selectedId: subItem.id })
                    );
                  }}
                >
                  {subItem.name}
                </CustomMenuItem>
              ),
              key: `sm_${subItem.id}`,
            };
          }),
        };
      });
    }
  };

  return (
    <Navigation
      $menuType={menuMode}
      disabledOverflow={true}
      theme="dark"
      mode={menuMode}
      items={getMenuItems()}
    />
  );
}

export default NavigationMenu;

interface NavigationMenuProps {
  $menuType: string;
}

const Navigation = styled(Menu)<NavigationMenuProps>`
  /* general styles */
  background-color: transparent;
  width: fit-content;
  line-height: 80px;
  /* padding: 0; */

  /* horizontal menu styles */
  margin-right: ${(p) => (p.$menuType === "horizontal" ? "0" : undefined)};
  .ant-menu-submenu-title {
    color: #fff !important;
  }
  .ant-menu-submenu-title:hover {
    color: #bdc6f0 !important;
  }
  .ant-menu-submenu-selected::after,
  .ant-menu-submenu::after {
    border-bottom-width: 0 !important;
    border-bottom-color: white !important;
  }

  /* inline menu styles */
  margin-left: ${(p) => (p.$menuType === "inline" ? "0" : undefined)};
  .ant-menu-title-content {
    color: ${(p) => (p.$menuType === "inline" ? "#fff" : "inherit")};
  }
  .ant-menu-submenu-arrow {
    display: none;
  }
  .ant-menu-sub.ant-menu-inline {
    margin-inline: 10px;
    background: ${(p) =>
      p.$menuType === "inline" ? "rgba(0, 0, 0, 0.4) !important" : "inherit"};
    border-radius: ${(p) => (p.$menuType === "inline" ? "10px" : undefined)};
  }
  .ant-menu-item:hover {
    background: ${(p) =>
      p.$menuType === "inline" ? "rgba(0, 0, 0, 0.4) !important" : "inherit"};
  }
`;

const CustomMenuItem = styled.a`
  font-size: 16px;
  font-weight: 400;
`;
