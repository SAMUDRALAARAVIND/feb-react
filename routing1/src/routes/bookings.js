import { bookings } from "../bookings/data.js";
import { BookingCard } from "../BookingCard.js";
import { useNavigate } from "react-router-dom";

// Link
export const Bookings = () => {
    const navigate = useNavigate();

    const onPressCard = (bookingId) => {
        // navigate to => bookings/details/:bookingId
        navigate(`details/${bookingId}`);
    };

    return (
        <div style={{ border: "2px solid red", padding: "20px" }}>
            {
                bookings.map((booking, index) => {
                    return (
                        <BookingCard
                            key={index}
                            bookingDetails={booking}
                            onPressCard={onPressCard}
                        />
                    );
                })
            }
        </div>
    );
}