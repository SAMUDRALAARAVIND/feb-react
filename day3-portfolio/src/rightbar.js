import "./rightbar.css";


const experiences = [
    {
        companyName: "Acciojob",
        duration: "1 yr 4 months",
        points: [
            "Developed responsive web applications using React.js, ensuring cross-browser compatibility and optimal performance across various devices.",
            "Implemented state management solutions such as Redux or Context API to efficiently manage application state and facilitate seamless data flow.",
            "Collaborated with UX/UI designers to translate wireframes and mockups into interactive React components.",
            "Integrated RESTful APIs or GraphQL endpoints to fetch and display dynamic data within React applications.",
            "Optimized front-end performance through techniques like code splitting, lazy loading, and bundling with tools like Webpack.",
            "Worked in an Agile environment, participating in daily stand-ups, sprint planning, and code reviews to deliver high-quality software.",
            "Utilized testing frameworks such as Jest and React Testing Library to ensure robust test coverage and maintain code quality.",
        ],
        role: "Frontned Developer",
        skills: [
            "javascript",
            "react",
            "redux",
            "legendstate",
            "springboot",
            "jenkins",
        ]
    },
    {
        companyName: "ABc",
        role: "Backend Developer",
        duration: "1yr 3months",
        points: [
            "Designed and developed RESTful APIs using Node.js and Express.js to support client-side applications.",
            "Implemented authentication and authorization mechanisms such as JWT or OAuth2 to secure API endpoints and manage user access.",
            "Utilized relational (e.g., PostgreSQL, MySQL) or NoSQL (e.g., MongoDB) databases to store and retrieve data efficiently.",
            "Optimized database queries and schema design for improved performance and scalability.",
            "Worked with cloud platforms like AWS or Azure to deploy and manage backend services, leveraging services like EC2, Lambda, or Docker containers.",
            "Implemented automated testing for backend services using frameworks like Mocha, Chai, or Jest to ensure reliability and maintainability.",
            "Collaborated with front-end developers to define API contracts and ensure seamless integration between front-end and back-end systems.",
        ],
        skills: [
            "Spring Boot",
            "Java",
            "Jpa",
            "AWS",
            "Devops"
        ]
    }
]


const ExperienceCard = ({ details }) => {
    return (
        <div className="experience-card">
            <div className="header">
                <p className="company-name">{details.companyName + "  -  " + details.role}</p>
                <span>{details.duration}</span>
            </div>
            <ul>
                {
                    details.points.map(point => <li>{point}</li>)
                }
            </ul>
            <div className="skills">
                {
                    details.skills.map((skill) => <span>{skill}</span>)
                }
            </div>
        </div>
    )
}

export const RightBar = () => {
    return (
        <div className="rightbar-container">
            <h2>Experience</h2>
            <ExperienceCard details={experiences[0]} />
            <ExperienceCard details={experiences[1]} />
        </div>
    );
}; 