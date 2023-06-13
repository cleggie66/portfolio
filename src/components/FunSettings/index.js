import bugLight from "../../media/cursors/bug-light.png"
import bullseyeLight from "../../media/cursors/bullseye-light.png"
import circleLight from "../../media/cursors/circle-light.png"
import classicLight from "../../media/cursors/classic-light.png"
import crosshairsLight from "../../media/cursors/crosshairs-light.png"
import fireLight from "../../media/cursors/fire-light.png"
import heartLight from "../../media/cursors/heart-light.png"
import locationLight from "../../media/cursors/location-light.png"
import mouseLight from "../../media/cursors/mouse-light.png"
import republicLight from "../../media/cursors/republic-light.png"
import smileLight from "../../media/cursors/smile-light.png"
import squareLight from "../../media/cursors/square-light.png"
import starLight from "../../media/cursors/star-light.png"
import wandLight from "../../media/cursors/wand-light.png"
import bugDark from "../../media/cursors/bug-dark.png"
import bullseyeDark from "../../media/cursors/bullseye-dark.png"
import circleDark from "../../media/cursors/circle-dark.png"
import classicDark from "../../media/cursors/classic-dark.png"
import crosshairsDark from "../../media/cursors/crosshairs-dark.png"
import fireDark from "../../media/cursors/fire-dark.png"
import heartDark from "../../media/cursors/heart-dark.png"
import locationDark from "../../media/cursors/location-dark.png"
import mouseDark from "../../media/cursors/mouse-dark.png"
import republicDark from "../../media/cursors/republic-dark.png"
import smileDark from "../../media/cursors/smile-dark.png"
import squareDark from "../../media/cursors/square-dark.png"
import starDark from "../../media/cursors/star-dark.png"
import wandDark from "../../media/cursors/wand-dark.png"

import { setCursor, setTheme } from "../../store/settings";
import { useDispatch, useSelector } from "react-redux";
import "./FunSettings.css";
import { useState } from "react"


function FunSettings({ visibility }) {
    const dispatch = useDispatch()
    const settingsState = useSelector(state => state.settings);
    const theme = settingsState.theme;
    const cursor = settingsState.cursor;
    const [favSpiceGirl, setFavSpiceGirl] = useState("");


    return (
        <div className={visibility}>
            <div className="fun-settings-page">
                <h2>Choose Your Cursor</h2>
                <div className="cursor-options">
                    <div onClick={() => dispatch(setCursor("circle"))}>
                        <img
                            src={theme === "light" ? circleLight : circleDark} alt="circle"
                            className={`cursor-preview ${cursor === "circle" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("bug"))}>
                        <img
                            src={theme === "light" ? bugLight : bugDark} alt="bug"
                            className={`cursor-preview ${cursor === "bug" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("bullseye"))}>
                        <img
                            src={theme === "light" ? bullseyeLight : bullseyeDark} alt="bullseye"
                            className={`cursor-preview ${cursor === "bullseye" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("classic"))}>
                        <img
                            src={theme === "light" ? classicLight : classicDark} alt="classic"
                            className={`cursor-preview ${cursor === "classic" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("crosshairs"))}>
                        <img
                            src={theme === "light" ? crosshairsLight : crosshairsDark} alt="crosshairs"
                            className={`cursor-preview ${cursor === "crosshairs" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("fire"))}>
                        <img
                            src={theme === "light" ? fireLight : fireDark} alt="fire"
                            className={`cursor-preview ${cursor === "fire" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("heart"))}>
                        <img
                            src={theme === "light" ? heartLight : heartDark} alt="heart"
                            className={`cursor-preview ${cursor === "heart" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("location"))}>
                        <img
                            src={theme === "light" ? locationLight : locationDark} alt="location"
                            className={`cursor-preview ${cursor === "location" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("mouse"))}>
                        <img
                            src={theme === "light" ? mouseLight : mouseDark} alt="mouse"
                            className={`cursor-preview ${cursor === "mouse" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("republic"))}>
                        <img
                            src={theme === "light" ? republicLight : republicDark} alt="republic"
                            className={`cursor-preview ${cursor === "republic" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("smile"))}>
                        <img
                            src={theme === "light" ? smileLight : smileDark} alt="smile"
                            className={`cursor-preview ${cursor === "smile" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("square"))}>
                        <img
                            src={theme === "light" ? squareLight : squareDark} alt="square"
                            className={`cursor-preview ${cursor === "square" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("star"))}>
                        <img
                            src={theme === "light" ? starLight : starDark} alt="star"
                            className={`cursor-preview ${cursor === "star" && "selected-cursor"}`} />
                    </div>
                    <div onClick={() => dispatch(setCursor("wand"))}>
                        <img
                            src={theme === "light" ? wandLight : wandDark} alt="wand"
                            className={`cursor-preview ${cursor === "wand" && "selected-cursor"}`} />
                    </div>
                </div>
                <h2>Choose Your Theme</h2>
                <div className="theme-options">
                    <h3
                        className={`${theme === "light" && "selected-theme"}`}
                        onClick={() => dispatch(setTheme("light"))}>

                        Light</h3>
                    <h3
                        className={`${theme === "dark" && "selected-theme"}`}
                        onClick={() => dispatch(setTheme("dark"))}>
                        Dark</h3>
                </div>
                <h2>Choose Your Favorite Spice Girl</h2>
                <div className="spice-options">
                    <h3
                        className={`spice-preview ${favSpiceGirl === "emma" && "selected-spice"}`}
                        onClick={() => setFavSpiceGirl("emma")}>
                        Emma</h3>
                    <h3
                        className={`spice-preview ${favSpiceGirl === "melb" && "selected-spice"}`}
                        onClick={() => setFavSpiceGirl("melb")}>
                        Mel B</h3>
                    <h3 className={`spice-preview ${favSpiceGirl === "melc" && "selected-spice"}`}
                        onClick={() => setFavSpiceGirl("melc")}>
                        Melanie C</h3>
                    <h3 className={`spice-preview ${favSpiceGirl === "geri" && "selected-spice"}`}
                        onClick={() => setFavSpiceGirl("geri")}>
                        Geri</h3>
                </div>
            </div>
        </div>
    )
};

export default FunSettings;