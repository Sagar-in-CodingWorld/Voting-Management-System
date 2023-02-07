import React from 'react';
let result = 'a Odd',cstyle={color:"green"};
let n = parseInt(prompt("Enter any Integer number"));
if(n%2 === 0){
    result='an Even';
    cstyle.color="blue"
}
//Even Oddb component
const EvenOdd = () =>{
    return(
        <>

            <h1 style={cstyle}>It is {result} number</h1>
        </>
    )
}
export default EvenOdd;