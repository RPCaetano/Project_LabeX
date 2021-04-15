import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./router/Routes";
import GlobalStyle from "./styled/globalStyled";


function App() {
  return (
    <BrowserRouter>
     <GlobalStyle />
     <Header/>
     <Routes/>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
