import { useState } from "react";

export default function Input({ addSkill }) {
    console.log("input render");
    const [value, setValue] = useState("");

    const onChangeText = (e) => {
        setValue(e.target.value)
    }

    const onEnter = (e) => {
        const skill = value.trim();
        if (e.key === "Enter" && skill) {
            // inform parent component
            addSkill(skill);
            setValue("");
        }
    }

    return (
        <input
            className="input"
            placeholder="Enter Skill"
            onChange={onChangeText}
            value={value}
            onKeyUp={onEnter}
        />
    );
}