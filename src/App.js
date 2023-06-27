import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux"
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectIndex from "./components/ProjectIndex";
import Critique from './components/Critique';
import ReachOut from './components/ReachOut';
import FunSettings from './components/FunSettings';
import videoLight from "./media/backgrounds/crystal-slowed-light.mp4";
import videoDark from "./media/backgrounds/crystal-slowed-dark.mp4";


function App() {
  const pageState = useSelector(state => state.viewing);
  const settingsState = useSelector(state => state.settings);

  return (
    <>
      <div className='loading-page'>
        <i className="fa-solid fa-spinner fa-spin-pulse" />
      </div>
      <div className={`page cursor-${settingsState.cursor}-${settingsState.theme}`} id={settingsState.theme}>
        <Navbar />
        <About visibility={pageState.about} />
        <ProjectIndex visibility={pageState.home} />
        <Critique visibility={pageState.critique} />
        <ReachOut visibility={pageState.reachOut} />
        <FunSettings visibility={pageState.funSettings} />
        <Footer />
        <video className={settingsState.theme === "light" ? "background-video-visible" : "background-video-hidden"} loop={true} autoPlay="autoplay" muted>
          <source src={videoLight} type="video/mp4" />
        </video>
        <video className={settingsState.theme === "dark" ? "background-video-visible" : "background-video-hidden"} loop={true} autoPlay="autoplay" muted>
          <source src={videoDark} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;
