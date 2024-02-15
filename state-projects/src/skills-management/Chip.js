import { memo } from "react";

const Chip = ({ skill, deleteSkill }) => {
    console.log("chip render");

    const removeSkill = () => {
        deleteSkill(skill);
    }

    return (
        <div className="skill">
            <p>{skill}</p>
            <span className="material-icons" onClick={removeSkill}>close</span>
        </div>
    );
}

export default memo(Chip)