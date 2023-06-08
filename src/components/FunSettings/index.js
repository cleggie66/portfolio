import "./FunSettings.css";

function FunSettings({ visibility }) {
    return (
        <div className={visibility}>
            <div className="reach-out-page">
                <h2>Choose Your Cursor</h2>
                <div className="settings-options">
                    <i className="fa-solid fa-wand-magic-sparkles cursor-1"></i>
                </div>
                <h2>Choose Your Theme</h2>
                <div className="settings-options">
                    <h3>Light</h3>
                    <h3>Dark</h3>
                </div>
                <h2>Choose Your Favorite Spice Girl</h2>
                <div className="settings-options">
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