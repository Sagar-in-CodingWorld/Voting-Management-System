
let day;
day=prompt("Enter the day");
let cstyle={color:"Blue"}
let msg="It is Office. Go to work ";
let image="o.jpg";
document.write("Hi sagar")
if(day==='sunday'){
    msg="It is Holiday. We are going to watch movie to RDB Cinema ";
    cstyle.color="Green";
    image="b.jpg";
}

export default function Day(){
    return(
        <>
            
            <h2 style={cstyle}>{msg}hi</h2>
            <img src={image} alt="imag"></img>
        </>
    )
}