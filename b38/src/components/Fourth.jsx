import React from "react";
function Yoyo(){
    return(
        <>
            <h4>default</h4>
        </>
    )
}
function Honey(){
    return(
        <>
            <h2>Non-default working</h2>
        </>
    )
}
function Fifth(){
    return(
        <>
            <h3>This is fifth build in multiple components</h3>
        </>
    )
}
export default Yoyo;
export {Honey};
export {Fifth};
