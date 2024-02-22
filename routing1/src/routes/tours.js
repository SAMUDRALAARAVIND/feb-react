import { Link } from "react-router-dom"

// http://localhost:3000/tours
// http://localhost:3000
// http://localhost:3000/bookings
export const Tours = () => {
    return (
        <>
            <h1>Tours Page</h1>
            <Link to="../bookings">Bookings</Link>
        </>
    )
}