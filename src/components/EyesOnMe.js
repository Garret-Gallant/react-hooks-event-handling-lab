// Code EyesOnMe Component Here
import React from "react";

const eyesFocused = () => {
    console.log("good!")
}

const eyesBlurred = () => {
    console.log("Hey! Eyes On Me!")
}

const EyesOnMe = () => {

return (
<div>
    <button onBlur={eyesBlurred} onFocus={eyesFocused}>Eyes On Me!</button>
</div>
    )
}

export default EyesOnMe;