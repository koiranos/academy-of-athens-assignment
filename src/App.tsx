import { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicationsPage from "./components/routes/PublicationsPage";
import NotFound from "./components/routes/notFound";
import MainPage from "./components/routes/MainPage";
import RootPage from "./components/routes/root";
import { useEffect, useState } from "react";
import {
  MenuContext,
  PublicationsContext,
  PageDataContext,
} from "./components/context/contexts";

import { getMenuData, getPublicationsData } from "./components/services/api";
import { pageContent } from "./misc/data";

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  font-family: "Noto Serif", serif;
  a{
    text-decoration: none;
    color: #fff;
  }
}
`;

function App() {
  const [menuData, setMainData] = useState<any>();
  const [publicationsData, setPublicationsData] = useState<any>();

  const handleDataFetching = async () => {
    const menu = await getMenuData();
    const publications = await getPublicationsData();
    setMainData(menu);
    setPublicationsData(publications);
  };

  useEffect(() => {
    handleDataFetching();
  }, []);

  return (
    <MenuContext.Provider value={menuData}>
      <PublicationsContext.Provider value={publicationsData}>
        <PageDataContext.Provider value={pageContent}>
          <Router>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<RootPage />}>
                <Route path="/*" element={<NotFound />} />
                <Route index element={<MainPage />} />
                <Route path="/publications" element={<PublicationsPage />} />
              </Route>
            </Routes>
          </Router>
        </PageDataContext.Provider>
      </PublicationsContext.Provider>
    </MenuContext.Provider>
  );
}

export default App;
