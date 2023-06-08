import { useState } from "react";
import "./FunSettings.css";

import bug from "../../media/cursors/bug.png"
import bullseye from "../../media/cursors/bullseye.png"
import circleDark from "../../media/cursors/circle-dark.png"
import circleLight from "../../media/cursors/circle-light.png"
import classic from "../../media/cursors/classic.png"
import crosshairs from "../../media/cursors/crosshairs.png"
import fire from "../../media/cursors/fire.png"
import heart from "../../media/cursors/heart.png"
import location from "../../media/cursors/location.png"
import mouse from "../../media/cursors/mouse.png"
import smile from "../../media/cursors/smile.png"
import square from "../../media/cursors/square.png"
import star from "../../media/cursors/star.png"
import wand from "../../media/cursors/wand.png"

import { setCursor } from "../../store/settings";
import { useDispatch } from "react-redux";

function FunSettings({ visibility }) {
    const dispatch = useDispatch()

    return (
        <div className={visibility}>
            <div className="fun-settings-page">
                <h2>Choose Your Cursor</h2>
                <div className="cursor-options">
                    <div
                        onClick={() => dispatch(setCursor("circle-dark"))}>
                        <img src={circleDark} alt="circle-dark" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("circle-light"))}>
                        <img src={circleLight} alt="circle-light" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("bug"))}>
                        <img src={bug} alt="bug" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("bullseye"))}>
                        <img src={bullseye} alt="bullseye" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("classic"))}>
                        <img src={classic} alt="classic" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("crosshairs"))}>
                        <img src={crosshairs} alt="crosshairs" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("fire"))}>
                        <img src={fire} alt="fire" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("heart"))}>
                        <img src={heart} alt="heart" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("location"))}>
                        <img src={location} alt="location" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("mouse"))}>
                        <img src={mouse} alt="mouse" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("smile"))}>
                        <img src={smile} alt="smile" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("square"))}>
                        <img src={square} alt="square" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("star"))}>
                        <img src={star} alt="star" className="cursor-preview" />
                    </div>
                    <div
                        onClick={() => dispatch(setCursor("wand"))}>
                        <img src={wand} alt="wand" className="cursor-preview" />
                    </div>
                </div>
                <h2>Choose Your Theme</h2>
                <div className="theme-options">
                    <h3>Coming Soon...</h3>
                    {/* <h3>Light</h3> */}
                    {/* <h3>Dark</h3> */}
                </div>
                <h2>Choose Your Favorite Spice Girl</h2>
                <div className="spice-options">
                    <h3>Emma</h3>
                    <h3>Mel B</h3>
                    <h3>Melanie C</h3>
                    <h3>Geri</h3>
                </div>
            </div>
        </div>
    )
};

export default FunSettings;