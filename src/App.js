import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux"
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectIndex from "./components/ProjectIndex";
import video from "./media/crystal-slowed.mp4"
import { useState } from 'react';

function App() {
  // const [pageVisibility, setPageVisibility] = useState({
  //   home: "active",
  //   about: "pre",
  //   critique: "pre",
  //   reachOut: "pre",
  //   funSettings: "pre",
  // });

  // const setActivePage = (page) => {
  //   const pages = { ...pageVisibility };
  //   const keys = Object.keys(pages);
  //   for (let i = 0; i < keys.length; i++) {
  //     let key = keys[i];
  //     if (pages[key] === "active") pages[key] = "post"
  //     else if (key === page) pages[key] = "active"}
  //   setPageVisibility(pages);
  // };

  // const resetAllPages = () => {
  //   const pages = { ...pageVisibility };
  //   console.log("PAGE CHECK", pages)
  //   const keys = Object.keys(pages);
  //   for (let i = 0; i < keys.length; i++) {
  //     let key = keys[i];
  //     if (pages[key] === "post") pages[key] = "pre";
  //   }
  //   setPageVisibility(pages);
  // };
  
  // const changePage = (page) => {
  //   setActivePage(page);

  //   setTimeout(() => {
  //     resetAllPages();
  //   }, 1000);
  // }

  const pageState = useSelector(state => state.viewing);



  return (
    <div className="page">
      <Navbar />
      <About visibility={pageState.about}/>
      <ProjectIndex />
      <Footer />
      <video className="background-video" loop={true} autoPlay="autoplay" muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
