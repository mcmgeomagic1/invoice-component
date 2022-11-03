import React from "react"
import {ThemeProvider} from "styled-components"
import Theme from "./Theme/Theme"
import GlobalStyles from "./styles/Global"
import { GraualControl } from "./components/granualControl"
import { AppProvider } from "./context/AppContext"

export const App: React.FC =() => {


  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <AppProvider>
          <GraualControl/>
      </AppProvider>
    </ThemeProvider>    
  );
}
