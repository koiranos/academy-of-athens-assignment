import { createGlobalStyle } from "styled-components";

import RootPage from "./components/root";
import ContentSection from "./components/content";

import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  font-family: "Noto Serif", serif;
  a{
    text-decoration: none;
  }
}
`;

function App() {
  return (
    <RootPage>
      <GlobalStyles />
      <ContentSection />
    </RootPage>
  );
}

export default App;
