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


function App() {
  const [dogsBar, setdogBar] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then(res => res.json())
      .then(data =>{
      setdogBar(data)
      })
    .catch(e=> console.e(e))
  }, [])
  return (
    <div className="App">

      <DogPage
      dogsBar={dogsBar}
      />
    </div>
  );
}

export default App;






      
      
      


      
      

