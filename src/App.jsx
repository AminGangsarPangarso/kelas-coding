import {Routes,Route} from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"
import HomePage from "./pages/HomePage"
import FooterComponent from "./components/FooterComponent"
import KelasPage from "./pages/KelasPage"
import SyaratKetenPage from "./pages/SyaratKetenPage"
import TestimonialPage from "./pages/TestimonialPage"
import FaqPage from "./pages/FaqPage"
function App() {


  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/kelas" Component={KelasPage}/>
        <Route path="/syaratketen" Component={SyaratKetenPage}/>
        <Route path="/faq" Component={FaqPage}/>
        <Route path="/testimonial" Component={TestimonialPage}/>
      </Routes>
      <FooterComponent/>
    </>
  )
}

export default App
