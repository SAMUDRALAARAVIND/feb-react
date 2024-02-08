import React from "react";

const chatData = [
    {
        sender: "Srikar",
        message: "everything is same except inner text or content",
        timeAgo: "3 mins ago",
    },
    {
        sender: "Aravind",
        message: "how are  you sir",
        timeAgo: "2 mins ago",
    },
    {
        sender: "Priyanshu",
        message: "React is Awesome",
        timeAgo: "a second ago",
    },
];

// <Card id="test" className="abc" /> => Card({id: "test", className: "abc"})
const Card = ({ sender, timeAgo, message }) => {
    return (
        <div style={styles.card}>
            <b>{sender}</b>
            <p>{message}</p>
            <span style={styles.time}>{timeAgo}</span>
        </div>
    );
};

export const Chat = () => {
    return (
        <div>
            {chatData.map(chatObj => (
                <Card
                    sender={chatObj.sender}
                    timeAgo={chatObj.timeAgo}
                    message={chatObj.message}
                />
            )
            )}
        </div>
    );
};

const styles = {
    card: {
        boxShadow: "2px 2px 4px gray",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
    },
    time: {
        alignSelf: "flex-end",
        fontSize: "1.3rem",
    },
};
