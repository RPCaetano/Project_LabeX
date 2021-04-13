import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styled/globalStyled";


function App() {
  return (
    <BrowserRouter>
     <GlobalStyle />
     
     <Header/>
     <HomePage/>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
