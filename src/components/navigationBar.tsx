import { useEffect, useState } from "react";

import { Menu, Button, Tooltip, Drawer } from "antd";
import { DownOutlined, SearchOutlined, MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { mainData } from "../misc/data";
import { useWindowSize } from "../misc/useWIndowSize";

// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/esm/Nav";
// import NavDropdown from "react-bootstrap/esm/NavDropdown";
// import { useToggleDropDown } from "../misc/useToggleDropDown";

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

  // antd
  const getMenuItems = () => {
    return mainData.items.map((item, id) => {
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
        children: item.submenu.map((subItem, id) => {
          return {
            label: <CustomMenuItem>{subItem.name}</CustomMenuItem>,
            key: `${subItem.name}_${id}`,
          };
        }),
      };
    });
  };

  // // bootstrap

  // const getMenuItems = () => {
  //   return mainData.items.map((item, id) => {
  //     const customDropDownTitle = (
  //       <span>
  //         {item.name} <DownOutlined style={{ fontSize: "12px" }} />
  //       </span>
  //     );
  //     if (item.submenu.length > 0) {
  //       const dropDownActions = useToggleDropDown();
  //       return (
  //         <NavDropdown
  //           title={customDropDownTitle}
  //           key={`dropdown_menu_item_${id}`}
  //           {...dropDownActions}
  //           children={item.submenu.map((subItem, subId) => {
  //             return (
  //               <NavDropdown.Item
  //                 key={`sub_menu_item_${subId}`}
  //                 href={`${subItem.url}`}
  //               >
  //                 {subItem.name}
  //               </NavDropdown.Item>
  //             );
  //           })}
  //           id="basic-nav-dropdown"
  //         ></NavDropdown>
  //       );
  //     } else {
  //       return (
  //         <Nav.Link key={`menu_item_${id}`} href={`${item.url}`}>
  //           {item.name}
  //         </Nav.Link>
  //       );
  //     }
  //   });
  // };

  // return (
  //   // bootstrap
  //   <div style={{ backgroundColor: "#1B4965" }}>
  //     <Navbar expand="lg" className="bg-transparent">
  //       <Container>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //         <Navbar.Collapse>
  //           <Nav className="ms-auto me-4 ">{getMenuItems()}</Nav>
  //           <Navbar.Text>
  //             Signed in as: <a href="#login">Mark Otto</a>
  //           </Navbar.Text>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   </div>
  // );

  // antd
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
  .ant-btn {
    margin-right: 20px;
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

export default NavigationBar;
