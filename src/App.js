import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./router/Routes";
import GlobalStyle from "./styled/globalStyled";


function App() {
  return (
    <BrowserRouter>
     <GlobalStyle />
     <Header/>
     <Routes/>
     </BrowserRouter>
  );
}

export default App;
