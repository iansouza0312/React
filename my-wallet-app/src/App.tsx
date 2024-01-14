import React from "react";
import {ThemeProvider} from "styled-components";
import Layout from "./components/Layout";

import { GlobalStyle } from "./styles/Global";
import dark from "./styles/themes/dark";

const App: React.FC = () => {

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
}

export default App
