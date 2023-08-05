import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
   <div>
    <NavBar></NavBar>
    <Home></Home>
    <SocialLink></SocialLink>
    <About></About>
    <Portfolio></Portfolio>
    <Experience></Experience>
    <Contact></Contact>

   </div>
  );
}

export default App;
