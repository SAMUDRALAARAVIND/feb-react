

const data = {
    languages: ["C++", "JavaScript", "Java"],
    databases: ["MySql", "SQL Server", "MongoDB"],
    acheivements: ["Attending the class", "Highest package of the decade", "Firewall cracked and hacked"],
    frameworks: ["Angular", "React", "Spring Boot"]
}

const education = [
    {
        course: "BTech",
        institute: "NITW",
        duration: "2018 - 2022",
        grade: "6.66",
        branch: "ECE"
    },
    {
        course: "Intermediate",
        institute: "Chaitanya",
        duration: "2015 - 2017",
        grade: "88%",
        branch: "MPC"
    },
    {
        course: "SSC",
        institute: "VBHS",
        duration: "2005-2015",
        grade: "70%",
    }
]

const SubSection = ({ title, points }) => {
    return (
        <div className="subsection">
            <p className="title">{title}</p>
            <ul>
                {
                    points.map(point => <li>{point}</li>)
                }
            </ul>
        </div>
    )
}

const EducationCard = ({ details }) => {
    return <div className="education-card">
        <h4>{details.institute}</h4>
        <p>{details.duration}</p>
        <p>{details.grade}</p>
        {details.branch && <p>{details.branch}</p>}
        <span className="course">{details.course}</span>
    </div>
}

export const LeftBar = () => {
    return (
        <div className="leftbar-container">
            <div className="education">
                <h2>Education</h2>
                {
                    education.map((item) => <EducationCard details={item} />)
                }
            </div>
            <SubSection title="Databases" points={data.databases} />
            <SubSection title="Languages" points={data.languages} />
            <SubSection title="Acheivements" points={data.acheivements} />
            <SubSection title="Frameworks" points={data.frameworks} />
        </div>
    )
}