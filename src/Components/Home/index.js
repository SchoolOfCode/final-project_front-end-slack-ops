import logo from "../../Assets/turnuplogo.svg";
import * as React from "react";
import "./index.css";
import Promovid from "../../Assets/turnUp-v5-promo.mp4";
import Drawer from "../Drawer";
import loadFrame from "../../Assets/loadFrame.jpg";

// Landing page code here

// video ?
// <video> hfsf</video> :
// <img> loading screen

export default function LandingPage({ handleOpen }) {
  return (
    <div>
      {Promovid ? (
        {/* <video loop autoPlay muted className="vid">
          <source src={Promovid} type="video/mp4" />
        </video> */}
      ) : (
        <img className="loadFrame" src={loadFrame} alt="loading frame" />
      )}
      <div className="content">
        <img
          width={"40%"}
          height={"auto"}
          src={logo}
          alt="turnup logo"
          className="logo"
        ></img>
        <h4 className="slogan">
          Free local events, all you have to do is turn up.
        </h4>
        <a href="/explore">
          <button className="sign-up">Get started</button>
        </a>
      </div>
      <Drawer />
    </div>
  );
}
