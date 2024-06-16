import { useEffect, useState } from "react";

import { Button, Tooltip, Drawer, Select } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";

import { useWindowSize } from "../misc/useWindowSize";

import NavigationMenu from "./utils/NavigationMenu";

function NavigationBar() {
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
        <NavigationMenu />
      ) : (
        <DrawerWrapper
          title="Μενού Πλοήγησης"
          placement={"left"}
          closable={false}
          onClose={() => {
            setShowDrawer(false);
          }}
          open={showDrawer}
          key={"left"}
        >
          <NavigationMenu />
        </DrawerWrapper>
      )}
      <SearchButtonContainer $menuType={menuMode}>
        <Tooltip title="αναζήτηση" placement="bottom">
          <SearchButton icon={<SearchButtonIcon />} type="text"></SearchButton>
        </Tooltip>
        <CountrySelect
          defaultValue="GR"
          style={{ marginRight: "20px", marginLeft: "10px" }}
          options={[
            {
              value: "GR",
              label: (
                <>
                  <ReactCountryFlagWrapper svg countryCode="GR" />
                  ΕΛ
                </>
              ),
            },
            {
              value: "EN",
              label: (
                <>
                  <ReactCountryFlagWrapper svg countryCode="US" />
                  EN
                </>
              ),
            },
          ]}
        />
      </SearchButtonContainer>
    </NavigationMenuContainer>
  );
}

export default NavigationBar;

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

const DrawerWrapper = styled(Drawer)`
  background-color: #1b4965 !important;
  width: fit-content !important;
  height: fit-content !important;
  border-bottom-right-radius: 30px !important;
  .ant-drawer-title {
    color: #fff;
  }
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

const ReactCountryFlagWrapper = styled(ReactCountryFlag)`
  width: 1.6em !important;
  height: 1.6em !important;
  margin-right: 4px !important;
`;
