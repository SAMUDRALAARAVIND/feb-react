import { useState } from "react";
import Chip from "./Chip";
import Input from "./Input";
import "./skills.css";
import 'material-icons/iconfont/material-icons.css';

/**
 * Show an input for taking skills from the user
 * added skills needs to be shown to the user down below the input 
 * every added skill can also be deleted by the user.
 * 
 * Array = [{id, skill}]
 * 
 * states :
 * inputValue 
 * skills 
 */

// Never manipulate state directly yourself
export default function App() {
    console.log("parent render");
    const [skills, setSkills] = useState([]);

    const addSkill = (newSkill) => {
        setSkills([...skills, newSkill]);
    }

    // useCallback
    const deleteSkill = (skillTobeDeleted) => {
        // skill = #400
        // skills.splice(index, 1); // skills 
        // skills = ["C++", "Java", "Python"] , skillTobeDeleted = "Java"
        // remainingSkills = ["C++", "Python"]
        const remainingSkills = skills.filter((skill) => skill !== skillTobeDeleted);
        // setSkills([...skills]); // setSkills(#500)
        setSkills(remainingSkills);
    }

    return (
        <div>
            <Input addSkill={addSkill} />
            {/* Input({}) */}
            <div className="skills-container">
                {
                    skills.map((skill, index) => <Chip deleteSkill={deleteSkill} key={index} skill={skill} />)
                }
            </div>
        </div>
    );
}