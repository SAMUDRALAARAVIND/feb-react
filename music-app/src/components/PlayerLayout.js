import { Outlet } from "react-router-dom"
import "../styles/player-layout.scss";
import Player from "./Player";
import { Notification } from "./Notification";

export const PlayerLayout = () => {
    return (
        <div className="player-layout-container">
            <Notification />
            <div className="screen">
                <Outlet />
            </div>
            <div className="player">
                <Player />
            </div>
        </div>
    )
}