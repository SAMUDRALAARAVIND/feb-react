import { Header } from "./header";
import { LeftBar } from "./leftbar";
import { RightBar } from "./rightbar.js"
import "./app.css";

export const App = () => {
    return (
        <div className="root-container">
            <Header />
            <div className="body">
                <LeftBar />
                <RightBar />
            </div>
        </div>
    );
}