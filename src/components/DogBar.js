import React, {useState} from "react";

function DogBar({ dogsBar }) {
    const [displayDog, setDisplayDog] = useState({
        id: null,
        name: '',
        isGoodDog: '',
image: ''
    })
    const [isGoodDog, setToggleDog] = useState({})
    function handleDisplayDog(dogId) {
       
        const findDog = dogsBar.find(dog => dog.id === dogId)
        if (findDog) {
            setDisplayDog({
                id: findDog.id,
                name: findDog.name,
                isGoodDog: findDog.isGoodDog,
                image: findDog.image
           })
       }
    }
    
    
    function handleToggle(dogId) {
        fetch(`http://localhost:3001/pups/${dogId}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            isGoodDog: !displayDog.isGoodDog
          })
        })
          .then(res => res.json())
          .then(updatedDog => {
            setDisplayDog(prev => ({
              ...prev,
              isGoodDog: updatedDog.isGoodDog
            }));
        
           });
      }

    
    return (
        <div>
            <div id="dog-bar">
                {dogsBar.map(dog => (
                    <span key={dog.id}
                    onClick={()=>handleDisplayDog(dog.id)}
                    >{dog.name}</span>
                ))}
              
            </div>
            <div id="dog-summary-container">
        <h1>DOGGO:</h1>
                <div id="dog-info">
                    <img
                    src={displayDog.image} alt={displayDog.name}
                    />
                    <p>{displayDog.name}</p>
                    
                    <button onClick={()=>handleToggle(displayDog.id)}>{displayDog.isGoodDog ? 'Bad Dog' : 'Good Dog'}</button>
        </div>
      </div>
        </div>
    )
}

export default DogBar