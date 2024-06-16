import { useState, useEffect } from "react";

export function useWindowSize(modeType: any) {
  const [menuMode, setMenuMode] = useState<"horizontal" | "inline">(modeType);

  const checkWindowSize = () => {
    if (window.innerWidth > 599) {
      setMenuMode("horizontal");
    } else {
      setMenuMode("inline");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();
    return () => window.removeEventListener("resize", checkWindowSize);
  }, [checkWindowSize]);

  return menuMode;
}
