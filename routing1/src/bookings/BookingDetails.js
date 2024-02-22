import { useParams } from "react-router-dom";
import { bookings } from "./data";

import { BookingCard } from "../BookingCard";

export const BookingDetails = () => {
    const params = useParams();

    const bookingDetails = bookings.find(booking => booking.id == params.bookingId);

    return <>

        {bookingDetails ?
            <BookingCard bookingDetails={bookingDetails} /> :
            <h1>No booking found with id : {params.bookingId} </h1>}
    </>
}