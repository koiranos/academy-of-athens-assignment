import { useEffect, useState } from "react";

import { Menu, Button, Tooltip, Drawer, Select } from "antd";
import { DownOutlined, SearchOutlined, MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";

import { useWindowSize } from "../misc/useWIndowSize";

interface NavigationBarProps {
  navData: any;
}

function NavigationBar({ navData }: NavigationBarProps) {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  // Custom Hook
  const menuMode = useWindowSize("horizontal");

  useEffect(() => {
    if (menuMode === "inline") {
      setShowMenu(false);
    }
    if (menuMode === "horizontal") {
      setShowMenu(true);
    }
  }, [menuMode]);

  const getMenuItems = () => {
    if (navData) {
      console.log("useState data: ", navData);
      return navData.items.map((item, id: number) => {
        return {
          label:
            item.submenu.length > 0 ? (
              <CustomMenuItem>
                {item.name} <DownOutlined />
              </CustomMenuItem>
            ) : (
              <CustomMenuItem>{item.name}</CustomMenuItem>
            ),
          key: `${item.name}_${id}`,
          theme: "light",
          children: item.submenu.map((subItem, id: number) => {
            return {
              label: <CustomMenuItem>{subItem.name}</CustomMenuItem>,
              key: `${subItem.name}_${id}`,
            };
          }),
        };
      });
    }
  };

  return (
    <NavigationMenuContainer $menuType={menuMode} $isMenuVisible={showMenu}>
      {menuMode === "inline" ? (
        <Tooltip
          title={showMenu ? "αποκρυψη μενου" : "προβολή μενου"}
          placement="bottom"
        >
          <ToggleMenuButton
            $isMenuVisible={showMenu}
            icon={<MenuOutlined />}
            onClick={() => setShowDrawer(!showMenu)}
          />
        </Tooltip>
      ) : null}

      {showMenu ? (
        <NavigationMenu
          $menuType={menuMode}
          disabledOverflow={true}
          theme="dark"
          mode={menuMode}
          items={getMenuItems()}
        />
      ) : (
        <CustomDrawer
          style={{
            backgroundColor: "#1B4965",
            width: "fit-content",
            height: "fit-content",
            borderBottomRightRadius: "30px",
          }}
          title={
            <p
              style={{
                color: "#fff",
              }}
            >
              Μενού Πλοήγησης
            </p>
          }
          placement={"left"}
          closable={false}
          onClose={() => {
            setShowDrawer(false);
          }}
          open={showDrawer}
          key={"left"}
        >
          <NavigationMenu
            $menuType={menuMode}
            disabledOverflow={true}
            theme="dark"
            mode={menuMode}
            items={getMenuItems()}
          />
        </CustomDrawer>
      )}
      <SearchButtonContainer $menuType={menuMode}>
        <Tooltip title="αναζήτηση" placement="bottom">
          <SearchButton icon={<SearchButtonIcon />} type="text"></SearchButton>
        </Tooltip>
        <CountrySelect
          defaultValue="GR"
          style={{ marginRight: "20px" }}
          options={[
            {
              value: "GR",
              label: (
                <span>
                  <ReactCountryFlag
                    svg
                    style={{
                      width: "1.6em",
                      height: "1.6em",
                      marginRight: "4px",
                    }}
                    countryCode="GR"
                  />
                  ΕΛ
                </span>
              ),
            },
            {
              value: "EN",
              label: (
                <span>
                  <ReactCountryFlag
                    svg
                    style={{
                      width: "1.6em",
                      height: "1.61em",
                      marginRight: "4px",
                    }}
                    countryCode="US"
                  />
                  EN
                </span>
              ),
            },
          ]}
        />
      </SearchButtonContainer>
    </NavigationMenuContainer>
  );
}

// Styling

interface NavigationMenuProps {
  $menuType: string;
}
interface NavigationMenuContainerProps {
  $menuType: string;
  $isMenuVisible: boolean;
}
interface ToggleButtonProps {
  $isMenuVisible: boolean;
}

const NavigationMenuContainer = styled.div<NavigationMenuContainerProps>`
  background-color: #1b4965;
  height: fit-content;
  display: flex;
  justify-content: ${(p) => (p.$isMenuVisible ? "center" : "start")};
  flex-direction: ${(p) =>
    p.$menuType === "horizontal" ? "row" : p.$isMenuVisible ? "column" : "row"};
`;

const NavigationMenu = styled(Menu)<NavigationMenuProps>`
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

const SearchButtonContainer = styled.div<NavigationMenuProps>`
  height: 80px;
  line-height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .ant-btn {
    /* margin-right: 20px; */
    margin-inline: ${(p) => (p.$menuType === "inline" ? "10px" : undefined)};
  }
`;

const SearchButton = styled(Button)`
  background-color: #fff;
  border-radius: 40px;
  &:hover {
    background-color: #ffffffd1 !important;
  }
`;

const SearchButtonIcon = styled(SearchOutlined)`
  width: 36px;
  height: 36px;
  padding: 10px;
  font-size: 18px;
  color: #138cd3;
`;

const ToggleMenuButton = styled(Button)<ToggleButtonProps>`
  line-height: 80px;
  margin-block: auto;
  margin-left: 10px;
  margin-top: ${(p) => (p.$isMenuVisible ? "24px" : undefined)};
`;

const CustomMenuItem = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const CustomDrawer = styled(Drawer)`
  .ant-drawer-header {
    padding: 10px;
  }
  .ant-drawer-body {
    padding: 0;
  }
`;

const CountrySelect = styled(Select)`
  .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
    color: #fff;
    &:hover {
      border: none;
    }
  }
  .ant-select-arrow {
    color: #fff;
  }
`;

export default NavigationBar;
