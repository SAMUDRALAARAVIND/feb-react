
import "../styles/notification.scss";
import { useSelector } from "react-redux";
import { Sidebar } from "./Sidebar";
import { useEffect, useRef } from "react";


export const Notification = () => {
    console.log("notification rendered");
    const modalRef = useRef(null); // { current: null }
    const tempRef = useRef(null);
    console.log(tempRef.current);

    const likeCount = useSelector((state) => state.likedSongs.length);

    const openModal = () => {
        // console.log(modalRef);
        modalRef.current.setOpenModal(true);
    }

    useEffect(() => {
        console.log(tempRef);
    }, [])

    return (
        <div className="notification-box" ref={tempRef}>
            <div className="fav" onClick={openModal}>
                <span className="material-icons">favorite</span>
                <b className="badge">{likeCount}</b>
            </div>
            <Sidebar ref={modalRef} />
        </div>
    );
}