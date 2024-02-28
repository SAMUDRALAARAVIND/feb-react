import { Outlet } from "react-router-dom"
import "../styles/player-layout.scss";
import Player from "./Player";

export const PlayerLayout = () => {
    return (
        <div className="player-layout-container">
            <div className="screen">
                <Outlet />
            </div>
            <div className="player">
                <Player />
            </div>
        </div>
    )
}