import { useEffect, useState, useRef } from 'react';
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
  const loadingBarFramesImport = require.context('./media/loading-bar', true);
  const loadingBarFrames = loadingBarFramesImport.keys().map(image => loadingBarFramesImport(image));

  const frameCount = 120;
  const intervalTime = 30;
  const _intervalRef = useRef(null);
  const [loadingBarFrameCount, setLoadingBarFrameCount] = useState(0);

  const pageState = useSelector(state => state.viewing);
  const settingsState = useSelector(state => state.settings);
  const [loadingPageClass, setLoadingPageClass] = useState("loading-page");


  useEffect(() => {
      _intervalRef.current = setInterval(() => {
        setLoadingBarFrameCount((loadingBarFrameCount) => {
          if (loadingBarFrameCount < frameCount) {
            return loadingBarFrameCount + 1
          } else {
            clearInterval(_intervalRef.current);
            return frameCount;
          }
        });
      }, intervalTime);
    return () => clearInterval(_intervalRef.current);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPageClass("loading-page-hidden");
    }, 2600);

    setTimeout(() => {
      setLoadingPageClass("loading-page-disabled");
    }, 4000);
  }, [])


  return (
    <div className={`page cursor-${settingsState.cursor}-${settingsState.theme}`} id={settingsState.theme}>
      <div className={loadingPageClass} id={settingsState.theme}>
        <img src={loadingBarFrames[loadingBarFrameCount]} alt="loading bar" className="loading-bar" />
      </div>
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
  );
}

export default App;
