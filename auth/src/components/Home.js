import { useEffect, useState } from "react"
import { getUserDetails } from "../auth/auth-model";

// apiStatus = "init" | "pending" | "succes" | "error"
export const HomeScreen = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [apiStatus, setApiStatus] = useState("init");

    useEffect(() => {
        (async function () {
            setApiStatus("pending");
            const { success, data } = await getUserDetails();
            if (success) {
                setApiStatus("success");
                setUserInfo(data);
            }
            else {
                setApiStatus("error");
            }
        })();
    }, []);

    if (apiStatus === "error") return <b>Something went wrong</b>;

    if (apiStatus === "init" || apiStatus === "pending") return <p>Loading ...</p>

    return (
        <div>
            {`Welcome Back ${userInfo.firstName} ${userInfo.lastName}`}
        </div>
    );
}