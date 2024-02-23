
import "./theme.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";
import { Button, DatePicker, Input, Tabs } from "antd";

export const ThemeApp = () => {
    const [theme, setTheme] = useState("light");
    const [isBtnLoading, setIsBtnLoading] = useState(false);

    const toggleTheme = () => {
        // background color of body 
        setTheme(theme === "light" ? "dark" : "light");
    };

    const themeFeatures = {
        theme,
        toggleTheme
    };

    useEffect(() => {
        let color = theme === "light" ? "#fff" : "#23272f";
        document.body.style.backgroundColor = color;
    }, [theme]);

    return (
        <ThemeContext.Provider value={themeFeatures}>
            <div className={`root-container ${theme === "light" ? "light-root-container" : "dark-root-container"}`}>
                <NavBar />
                <Main />
            </div>
            <Input />
            <DatePicker onChange={(data) => {
                console.log(data);
            }} />
            <Button style={{ border: "2px solid red", width: "200px", backgroundColor: "blue" }}>Click Me</Button>



            <div style={{ width: "500px", height: "300px", padding: "20px", border: "2px solid red" }}>
                <Tabs
                    items={[
                        {
                            key: "abc",
                            label: "My Bookings",
                            children: <h1>My Bookings Tab</h1>
                        },
                        {
                            key: "xyz",
                            label: "Upcoming Bookings",
                            children: <h2>Upcoming Bookings</h2>
                        }
                    ]}
                    onChange={(data) => {
                        console.log("changed tab to:", data);
                    }}
                    defaultActiveKey="xyz"
                />

                <Button loading={isBtnLoading} onClick={() => setIsBtnLoading(true)} >Loading Button</Button>
            </div>
        </ThemeContext.Provider>
    )
}