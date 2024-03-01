import axios from "axios";

const baseUrl = "https://node-auth-jwt-w78c.onrender.com";

const Endpoints = {
    login: `${baseUrl}/login`,
    signup: `${baseUrl}/signup`,
    users: `${baseUrl}/users`,
}

export async function login(loginInfo, callback) {
    try {
        const response = await axios(Endpoints.login, { data: loginInfo, method: "POST" });
        if (response.status >= 200 && response.status < 300) {
            // 2XX => success
            const token = response.data.token;
            localStorage.setItem("token", token);
            callback({ success: true })
        }
        else callback({ success: false, message: response.data.message })
    }
    catch (error) {
        callback({ success: false, message: error.message })
    }
}

function signup(signupInfo) {
    // TODO: Implement signup API 
    /**
     * Sample Payload:
        {
            "email" : "surajkumarmanna2000@gmail.com",
            "name": "",
            "gender": "MALE",
            "password": "suraj123",
            "city" :"Medinipur"
        }
     */
    // TODO: If users already logged in, he/she should not be able to see /entry route again
}

export async function getAllUsers(callback) {
    try {
        const response = await axios(Endpoints.users, {
            method: "GET",
            headers: {
                "Authorization": `Bearer: ${localStorage.getItem('token')}`
            }
        });

        if (response.status >= 200 && response.status < 300) {
            callback({ success: true, data: response.data.result });
        } else {
            callback({ success: false, message: response.data.message });
        }
    }
    catch (error) {

        callback({ success: false, message: error.response?.data?.message ?? error.message });
    }
}

// val = { name: "aravind" }
// val.abc?.xyz => Error