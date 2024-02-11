import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import MailList from "./components/mailList/MailList";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotel/:id" element={<Hotel/>}/>
      </Routes>
      <MailList/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
