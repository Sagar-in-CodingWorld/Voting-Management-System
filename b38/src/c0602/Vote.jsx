
let eligible = "He/She is eligible for Voting";
let age = prompt("Enter any Age");
var cstyle={color:'blue'}
if(age<18){
    eligible = "He/She is not eligible for Voting"
    cstyle.color='red';
}
export default function Vote(){
    return(
        <>
            <h1 style={cstyle}>{eligible}</h1>
             f
        </>
    )
}