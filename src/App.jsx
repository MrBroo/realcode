import "./App.css";
import { Box } from "@mui/material";
import MainNavbar from "./components/MainNavbar";
import Header from "./components/Header";
import RealSlider from "./components/Slider";
import WhyRealCode from "./components/WhyRealCode";
import About from "./components/About";
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Kurslar from "./components/Kurslar";

function App() {
  return (
    <Box>
      <MainNavbar />
      <Header />
      <RealSlider />
      <WhyRealCode />
      <Kurslar />
      <ContactUs />
      <About />
      <Footer />
    </Box>
  );
}

export default App;
