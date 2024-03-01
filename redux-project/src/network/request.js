import axios from "axios";

/**
 * httpConfig = {
 *   url: Endpoint,
 *   method: "",
 *   data: 
 *   params: 
 * }
 * 
 * { success: Boolean, data: any }
 */
async function request(httpConfig) {
    const token = localStorage.getItem("token");

    try {
        const response = await axios(httpConfig.url, {
            method: httpConfig.method,
            data: httpConfig.data,
            headers: {
                ...(token && { Authorization: `Bearer: ${token}` })
            }
        });
        if (response.status >= 200 && response.status < 300) {
            return { success: true, data: response.data };
        }
    }
    catch (error) {
        return { success: false, data: "Something went wrong" };
    }
}

export default request;