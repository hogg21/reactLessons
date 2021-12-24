import React from "react";
import Counter from './Counter.jsx';

const App = () => {
    return (
        <>
            <Counter start={17} interval={1000}></Counter>
            <Counter start={-50} interval={100}></Counter>
            <Counter start={0} interval={1000}></Counter>
        </>
    );
}
export default App;