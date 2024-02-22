import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Bookings } from "./routes/bookings";
import { Tours } from "./routes/tours";
import { FailedBookings } from "./bookings/FailedBookings";
import { PendingBookings } from "./bookings/PendingBookings";
import { BookingDetails } from "./bookings/BookingDetails";
// "/bookings", "/tours"

// BrowserRouter, Routes, Route => we can use these three components to make routing.
// Each Route component will enable one endpoint
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<h1>Home Screen</h1>} />
                <Route path="bookings" element={<Outlet />}>
                    <Route path="" element={<Bookings />} />
                    <Route path="details/:bookingId" element={<BookingDetails />} />
                    {/* <Route path="failed" element={<FailedBookings />} />
                    <Route path="pending" element={<PendingBookings />} /> */}
                    <Route path="*" element={<h1>404 Page not found</h1>} />
                </Route>
                <Route path="tours" Component={Tours} />
                <Route path="*" element={<h1>404 No screen found </h1>} />
            </Routes>

        </BrowserRouter>
    );
}
// bookings/ => <Bookings />
// bookings/xyz => 404
// bookings/details/28393 => <BookingDetails />

// bookings/ => Outlet ( <h1>Bookings Home Screen</h1> )
// bookings/failed => Outlet (<FailedBookings /> )
// bookings/pending => Outlet(<PendingBookings /> )
// bookings/xyz => Outlet ( null )



// bookings => Bookings
// bookings/pending => PendingBookings
// bookings/failed => FailedBookings

// localhost:3000/bookings => 
// localhost:3000/app/bookings => 
export default App;