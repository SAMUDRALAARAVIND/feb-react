import axios from "axios";

// it's not for UI , but for the logic
const baseUrl = "http://localhost:8080/user";

const endpoints = {
    login: `${baseUrl}/login`,
    signup: `${baseUrl}/signup`,
    details: `${baseUrl}/details`,
};

// Utility class
// The promise returned by an async function will be always resolved with the returned data from that function
// If there's an error inside the async function , the promise returned by async function will be rejected.
export class Auth {
    login = async (loginInfo) => {
        const httpConfig = {
            method: "POST",
            data: loginInfo,
        };

        try {
            const response = await axios(endpoints.login, httpConfig);
            const token = response.data.result;
            localStorage.setItem("token", token);
            return { success: true };
        }
        catch (error) {
            console.log("API Call  failed", error.message);
            return { success: false };
        }
    }

    signup = async (signupInfo) => {
        const httpConfig = {
            method: "POST",
            data: signupInfo,
        };

        try {
            const response = await axios(endpoints.signup, httpConfig);
            console.log(response);
        }
        catch (error) {
            console.log("API Call  failed", error.message);
        }
    }
}

export async function getUserDetails() {
    // make an api call to details api and fetch  data
    const token = localStorage.getItem("token");
    const httpConfig = {
        method: "GET",
        headers: {
            Authorization: `Bearer: ${token}`
        }
    };

    try {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        const response = await axios(endpoints.details, httpConfig);
        return { success: true, data: response.data[0] };
    }
    catch (error) {
        return { success: false, data: "Something went wrong" };
    }
}

export function checkIsUserLoggedIn() {
    return Boolean(localStorage.getItem("token"));
}

