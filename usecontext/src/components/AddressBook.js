import { useContext, memo } from "react";
import { EmailContext, LocationContext } from "./Context";

export const AddressBook = memo(() => {
    const location = useContext(LocationContext);
    // const email = useContext(EmailContext);

    console.log("addressbook render");

    return <div className="card">
        AddressBook
        {!location ? <p>Loading...</p> : <p>{`Latitude: ${location.lat} , Longitude: ${location.lng}`}</p>}
    </div>
});