import { ImagesList } from "./components/ImagesList";
import { SearchBox } from "./components/SearchBox";
import "./app.scss";
// import { images } from "./data";
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';
import { useState } from "react";

export const App = () => {
    const [images, setImages] = useState([]);

    const onSearchImages = (query) => {
        // make a network call and load data and put inside images state
        const endpoint = `https://api.unsplash.com/search/photos?query=${query}&client_id=6YXNHArV-pApjJMPnTDs5O-Sxtjmt3opb_RiY5hXG7U`;

    };


    return (
        <div className="container">
            <SearchBox />
            {images.length > 0 && <ImagesList images={images} />}
        </div>
    );
}