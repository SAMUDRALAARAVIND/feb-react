import MyPicture from "./images/picture.png";

export const Header = () => {
    return (
        <div className="header-container">
            <img src={MyPicture} alt="My picture" />
            <h1>Aravind Samudrala</h1>
            <div className="contact-details">
                <b>aravind@gmail.com</b>
                <span>4894004403</span>
            </div>
        </div>
    )
};