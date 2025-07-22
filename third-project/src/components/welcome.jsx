import React from "react";
function welcome({userName, email}){
    return <>
    <h1>Hello{userName}</h1>
    <h2>Welcome</h2>
    <p>{email}</p>
    </>
}
export default welcome;