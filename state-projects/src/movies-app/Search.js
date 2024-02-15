import { useState } from "react";

// const debounce = (f, ms) => {
//     let timerId = null;

//     return () => {
//         if (timerId) clearTimeout(timerId);
//         timerId = setTimeout(f, ms);
//     }
// }

export default function Search({ searchMovies }) {
    const [value, setValue] = useState('');

    const onChangeText = (e) => {
        setValue(e.target.value);
    }

    const onEnter = (e) => {
        const title = value.trim();
        if (e.key === "Enter") {
            searchMovies(title);
        }
    }

    return (
        <div className="search-container">
            <input
                onKeyUp={onEnter}
                placeholder="Search Movie by title..."
                value={value}
                onChange={onChangeText}
            />
        </div>
    );
}