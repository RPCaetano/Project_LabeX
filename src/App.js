import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styled/globalStyled";


function App() {
  return (
    <BrowserRouter>
     <GlobalStyle />
     <HomePage/>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
