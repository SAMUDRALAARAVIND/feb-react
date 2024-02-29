import { useSelector } from "react-redux";
import "../styles/sidebar.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export const Sidebar = forwardRef((props, ref) => {
    const [openModal, setOpenModal] = useState(false);

    useImperativeHandle(ref, () => {
        return { setOpenModal }
    });

    const likedSongs = useSelector((state) => state.likedSongs);

    if (!openModal) return null;

    return (
        <div className="sidebar-container">
            <span className="material-icons" onClick={() => setOpenModal(false)}>close</span>
            <h1>Sidebar</h1>
            {
                likedSongs.map(songId => <p key={songId}>{songId}</p>)
            }
        </div>
    );
});