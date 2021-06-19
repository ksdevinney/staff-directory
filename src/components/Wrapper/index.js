import React from "react";

// holds things

function Wrapper(props) {
    return (
    <main className="wrapper">{props.children}</main>
    );
}

export default Wrapper;