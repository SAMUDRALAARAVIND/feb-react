import { useEffect, useState } from "react";
import { getAllUsers } from "../network/api";
import { Spin } from "antd";
import "./table.scss";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [apiStatus, setApiStatus] = useState("pending");


    const fetchData = () => {
        getAllUsers(({ success, message, data }) => {
            if (success) {
                setUsers(data);
                setApiStatus("success");
            } else {
                setError(message);
                setApiStatus("error");
            }
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (apiStatus === "pending") return <Spin size="large" />

    if (apiStatus === "error") return <div><b>{error}</b><button onClick={fetchData}>Reload</button></div>

    const columns = users.length > 0 ? Object.keys(users[0]) : [];

    return (
        <table className="table" style={{ width: "100%" }}>
            <thead>
                <tr>
                    {columns.map(column => {
                        return <th key={column}>{column}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                        return (
                            <tr>
                                {
                                    columns.map(column => {
                                        return <td>{user[column]}</td>
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default Dashboard;
