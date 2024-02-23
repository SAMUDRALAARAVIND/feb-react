import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="navbar-container">
            <h2>Theme App</h2>
            <label htmlFor="theme-input">{theme}</label>
            <input type="checkbox" onChange={toggleTheme} id="theme-input" />
        </div>
    );
}

export default NavBar;