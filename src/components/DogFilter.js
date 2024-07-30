import React from "react";
 
function DogFilter({handleFilterGoodDogs, goodDogOn}) {
    
    return (
        <div>
             <div id="filter-div">
          <button id="good-dog-filter" onClick={handleFilterGoodDogs}>{goodDogOn? 'Filter good dogs: ON' : 'Filter good dogs: OFF'} </button>
      </div>
        </div>
    )
}

export default DogFilter