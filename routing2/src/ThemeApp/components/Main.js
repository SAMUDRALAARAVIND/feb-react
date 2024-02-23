import { useContext } from "react";
import "./main.scss";
import { ThemeContext } from "../ThemeContext";

const Main = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`main-container ${theme === "light" ? 'light-main-container' : ''}`}>
            <div className="title">
                <h1>React</h1>
                <p>The library for web and native user interfaces</p>
            </div>
            <div className="btns">
                <button>Learn React</button>
                <button>Api Reference</button>
            </div>
        </div>
    );
}
export default Main;