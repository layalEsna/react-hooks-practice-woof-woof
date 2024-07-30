// import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <div id="filter-div">
//         <button id="good-dog-filter">Filter good dogs: OFF</button>
//       </div>
//       <div id="dog-bar"></div>
//       <div id="dog-summary-container">
//         <h1>DOGGO:</h1>
//         <div id="dog-info"></div>
//       </div>
//     </div>
//   );
// }

// export default App;
// 00000


import React, {useState, useEffect} from "react";
import DogPage from "./DogPage";
import DogFilter from "./DogFilter";


function App() {
  const [dogsBar, setdogBar] = useState([])
  const [goodDogOn, setgoodDogOn] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then(res => res.json())
      .then(data =>{
      setdogBar(data)
      })
    .catch(e=> console.e(e))
  }, [])

  function handleFilterGoodDogs() {
    setgoodDogOn(prev=>!prev)
  }

  const displayGoodDogs = goodDogOn? dogsBar.filter(dog=> dog.isGoodDog) : dogsBar
  return (
    <div className="App">
      <DogFilter
        handleFilterGoodDogs={handleFilterGoodDogs}
        goodDogOn={goodDogOn}
      />
      <DogPage
      dogsBar={displayGoodDogs}
      />
    </div>
  );
}

export default App;






      
      
      


      
      

