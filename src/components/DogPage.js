import React from "react";
import DogBar from "./DogBar";

function DogPage({dogsBar}) {
    return (
        <div>
            <DogBar
            dogsBar={dogsBar}
            />
           
        </div>
    )
}

export default DogPage