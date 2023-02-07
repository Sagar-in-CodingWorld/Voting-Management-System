import React from "react";

export default function One(){
    return(
        <>
            <h1>Multiple Components in one file , this is Default component working</h1>
        </>
    )
}
function Two(){
    return(
        <>
            <h2>Second Component is executing properly</h2>
        </>
    )
}
function Three(){
    return(
        <>
            <h3>Third Component is executing successfully</h3>
        </>
    )
}
export function Four(){
    return(
        <>
            <h2>Fourth Component is working properly</h2>
        </>
    )
}
export {Two};
export {Three};
