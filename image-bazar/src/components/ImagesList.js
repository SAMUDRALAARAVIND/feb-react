export const ImagesList = ({ images }) => {
    return (
        <div className="images-container">
            {
                images.map(image => {
                    return (
                        <div className="image-card" key={image.id}>
                            <img src={image.urls.thumb} alt={image.alt_description} />
                            <div className="layer">
                                <p className="description">{image.description}</p>
                                <div className="likes">
                                    <span className="material-icons">favorite</span>
                                    <span>{image.likes}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}