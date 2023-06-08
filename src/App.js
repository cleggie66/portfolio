import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux"
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectIndex from "./components/ProjectIndex";
import Critique from './components/Critique';
import ReachOut from './components/ReachOut';
import FunSettings from './components/FunSettings';
import video from "./media/crystal-slowed.mp4";

function App() {
  const pageState = useSelector(state => state.viewing);
  const settingsState = useSelector(state => state.settings);


  return (
    <div className={`page cursor-${settingsState.cursor}`}>
      <Navbar />
      <About visibility={pageState.about} />
      <ProjectIndex visibility={pageState.home} />
      <Critique visibility={pageState.critique} />
      <ReachOut visibility={pageState.reachOut} />
      <FunSettings visibility={pageState.funSettings} />
      <Footer />
      <video className="background-video" loop={true} autoPlay="autoplay" muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
