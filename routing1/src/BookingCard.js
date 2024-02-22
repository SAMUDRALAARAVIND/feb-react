
import "./booking-card.css";

export const BookingCard = ({ bookingDetails, onPressCard }) => {

    const onClickCard = () => typeof onPressCard === "function" && onPressCard(bookingDetails.id);


    // const abc = {
    //     ...(onPressCard && { onClick: onClickCard })
    // }

    return (
        <div
            className="booking-card"
            // onClick={() => onPressCard(bookingDetails.id)}
            {...(onPressCard && { onClick: onClickCard })}
        >
            <div className="top">
                <b>{bookingDetails.source}</b>
                <p>{bookingDetails.date}</p>
                <b>{bookingDetails.destination}</b>
            </div>
            <span className="badge">{bookingDetails.status}</span>
        </div>
    );
}

/**
 {
        source: "Hyderbad",
        destination: "Bangalore",
        date: "26 Feb 2022",
        status: "pending",
 }
 */