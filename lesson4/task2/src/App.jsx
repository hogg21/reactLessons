import React from "react";
import Clock from "./Clock.jsx";

const App = () => {
    return (
        <>
            <Clock location="London" offset={0}></Clock>
            <Clock location="Kyiv" offset={2}></Clock>
            <Clock location="New York" offset={-5}></Clock>
        </>
    );
}
export default App;