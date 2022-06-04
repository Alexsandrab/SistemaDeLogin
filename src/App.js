import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyles from "./styles/global";

const App = () => (
    // chamando os componentes para renderizar na pagina
     <AuthProvider>
    <RoutesApp />
    <GlobalStyles />
  </AuthProvider>

);

export default App;