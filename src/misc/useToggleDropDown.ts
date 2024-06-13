import { useState } from "react";

export function useToggleDropDown(initialValue: boolean = false) {
  const [show, setShow] = useState(initialValue);

  const toggleDropDown = () => {
    setShow(!show);
  };

  const hideDropdown = () => {
    setShow(false);
  };

  const dropDownProps = {
    show,
    onMouseEnter: toggleDropDown,
    onMouseLeave: hideDropdown,
  };

  return dropDownProps;
}
