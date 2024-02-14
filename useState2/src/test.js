import { useState } from 'react';
// queue = [ 1 ]

// const myReact = {
//     "Test": {
//         state: null,
//         renders: 0,
//         isRenderTriggered: false,
//     }
// };

// function setState(newState) {
//     const prevState = myReact["Test"].state;
//     let newValue = typeof newState !== "function" ? newState : newState(prevState);
//     myReact["Test"].state = newValue;
//     if (!myReact["Test"].isRenderTriggered && prevState !== newState) {
//         // trigger a re render
//         setTimeout(Test, 0);
//         myReact["Test"].isRenderTriggered = true;
//     }
// }

// function useState(intialState) {
//     let renders = ++myReact["Test"].renders;
//     if (renders === 1) {
//         // first render
//         myReact["Test"].state = intialState;
//     }

//     myReact["Test"].isRenderTriggered = false;

//     return [myReact["Test"].state, setState];
// }

export const Test = () => {
    const [count, setCount] = useState(0);
    // count = myReact["Test"].state;
    console.log("rendered", count);

    function handleClick() {
        setCount(count);
        // setCount(prev => {
        //     console.log({ prev1: prev });
        //     return prev + 1
        // });
        setCount(count);
    }

    return (
        <>
            <h3>
                {count}
            </h3>
            <button onClick={handleClick}>
                Buy
            </button>
        </>
    );
}

