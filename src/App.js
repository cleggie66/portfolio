import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectIndex from "./components/ProjectIndex";
import video from "./media/crystal-slowed.mp4"

function App() {
  return (
    <div className="page">
      <Navbar />
      <ProjectIndex />
      <Footer />
      <video className="background-video" loop={true} autoPlay="autoplay" muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
