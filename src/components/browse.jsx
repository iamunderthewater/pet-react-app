import React, { useState, useEffect } from 'react';
import PetCard from './PetCard';
import { getPets } from './release-form';
import './browse.css';

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9.538 15.23q-2.398 0-4.064-1.666T3.808 9.5q0-2.398 1.666-4.064t4.064-1.667q2.399 0 4.065 1.667q1.666 1.666 1.666 4.064q0 1.042-.369 2.017q-.37.975-.97 1.668l5.908 5.907q.14.14.15.345q.01.203-.15.363q-.16.16-.353.16q-.195 0-.354-.16l-5.908-5.908q-.75.639-1.725.989q-.975.35-1.96.35Zm0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.36q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37Z"
      ></path>
    </svg>
  );
}

export default function Browse() {
  const [pets, setPets] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await getPets();
      setPets(resp);
      setFilter(resp);
    })();
  }, []);

  const handleChange = (e) => {
    setFilter(
      pets.filter((el) =>
        el.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const searchByAnimal = (animal) => {
    alert('Searching for ' + animal + '...');
    // Perform search logic here, like filtering images based on the given animal
  };

  return (
    <>
    <nav>
      <div className="search">
        <input type="text" onChange={handleChange} />
        <SearchIcon />
      </div>
      <div className="petcontainer">
        {filter.map(({ name, age, description, color, imageUrl, species }, i) => (
          <div key={i}>
            <h2>{species}</h2>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Description: {description}</div>
            <div>Color: {color}</div>
            <div>Species: {species}</div>
            <img src={imageUrl} alt={name} />
          </div>
        ))}
      </div>
      </nav><br></br><br></br><br></br>
      <div className="card-container">
      <div className="card">
        <div className="cat-image">
          <div className="card-content">
            <h2 className="card-title">Fluffy</h2>
            <img src="categorycat1.jpg" alt="Cat 1" />
            <div>Age: 3 years</div>
            <div>Description: Loves cuddling</div>
            <div>Colour: Gray</div>
            <div>Species: Domestic Short Hair</div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="cat-image">
          <div className="card-content">
            <h2 className="card-title">Whiskers</h2>
            <img src="Cat2.jpeg" alt="Cat 2" />
            <div>Age: 4 years</div>
            <div>Description: Playful and energetic</div>
            <div>Colour: Black and white</div>
            <div>Species: Tabby</div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="cat-image">
          <div className="card-content">
            <h2 className="card-title">Mittens</h2>
            <img src="Cat3.jpg" alt="Cat 3" />
            <div>Age: 2 years</div>
            <div>Description: Affectionate and friendly</div>
            <div>Colour: Orange</div>
            <div>Species: Maine Coon</div>
          </div>
        </div>
        </div>

      <div className="card">
        <div className="cat-image">
          <div className="card-content">
            <h2 className="card-title">Whiskers</h2>
            <img src="Cat4.jpg" alt="Cat 4" />
            <div>Age: 3 years</div>
            <div>Description: Playful and energetic</div>
            <div>Colour: Black and white</div>
            <div>Species: Tabby</div>
        </div>
        </div>
      </div>
      <div className="card-container">
  <div className="card">
    <div className="dog-image">
      <div className="card-content">
        <h2 className="card-title">Buddy</h2>
        <img src="dog1.jpeg" alt="Dog 1" />
        <div>Age: 2 years</div>
        <div>Description: Loyal companion</div>
        <div>Colour: Golden</div>
        <div>Species: Golden Retriever</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="dog-image">
      <div className="card-content">
        <h2 className="card-title">Rex</h2>
        <img src="dog2.jpg" alt="Dog 2" />
        <div>Age: 3 years</div>
        <div>Description: Energetic and playful</div>
        <div>Colour: Brown</div>
        <div>Species: Labrador Retriever</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="dog-image">
      <div className="card-content">
        <h2 className="card-title">Max</h2>
        <img src="dog3.jpg" alt="Dog 3" />
        <div>Age: 5 years</div>
        <div>Description: Friendly and intelligent</div>
        <div>Colour: Black</div>
        <div>Species: German Shepherd</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="dog-image">
      <div className="card-content">
        <h2 className="card-title">Daisy</h2>
        <img src="dog4.jpg" alt="Dog 4" />
        <div>Age: 4 years</div>
        <div>Description: Loves to play fetch</div>
        <div>Colour: White</div>
        <div>Species: Border Collie</div>
      </div>
    </div>
  </div>
</div>


<div className="card-container">
  <div className="card">
    <div className="hamster-image">
      <div className="card-content">
        <h2 className="card-title">Nibbles</h2>
        <img src="hamster1.jpg" alt="Hamster 1" />
        <div>Age: 6 months</div>
        <div>Description: Curious and playful</div>
        <div>Colour: Brown</div>
        <div>Species: Syrian Hamster</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="hamster-image">
      <div className="card-content">
        <h2 className="card-title">Whiskers</h2>
        <img src="hamster2.jpg" alt="Hamster 2" />
        <div>Age: 1 year</div>
        <div>Description: Active and friendly</div>
        <div>Colour: White</div>
        <div>Species: Dwarf Hamster</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="hamster-image">
      <div className="card-content">
        <h2 className="card-title">Snuggles</h2>
        <img src="hamster3.jpg" alt="Hamster 3" />
        <div>Age: 8 months</div>
        <div>Description: Loves to burrow</div>
        <div>Colour: Gray</div>
        <div>Species: Syrian Hamster</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="hamster-image">
      <div className="card-content">
        <h2 className="card-title">Peanut</h2>
        <img src="hamster4.jpg" alt="Hamster 4" />
        <div>Age: 1 year</div>
        <div>Description: Energetic and curious</div>
        <div>Colour: Tan</div>
        <div>Species: Roborovski Hamster</div>
      </div>
    </div>
  </div>
</div>


<div className="card-container">
  <div className="card">
    <div className="rabbit-image">
      <div className="card-content">
        <h2 className="card-title">Cottontail</h2>
        <img src="rabbit1.jpg" alt="Rabbit 1" />
        <div>Age: 1 year</div>
        <div>Description: Gentle and enjoys being petted</div>
        <div>Colour: White</div>
        <div>Species: Dwarf Rabbit</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="rabbit-image">
      <div className="card-content">
        <h2 className="card-title">Thumper</h2>
        <img src="rabbit2.jpg" alt="Rabbit 2" />
        <div>Age: 2 years</div>
        <div>Description: Playful and energetic</div>
        <div>Colour: Brown</div>
        <div>Species: Holland Lop</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="rabbit-image">
      <div className="card-content">
        <h2 className="card-title">Snowball</h2>
        <img src="rabbit3.jpg" alt="Rabbit 3" />
        <div>Age: 3 years</div>
        <div>Description: Loves to hop around</div>
        <div>Colour: Gray</div>
        <div>Species: Flemish Giant</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="rabbit-image">
      <div className="card-content">
        <h2 className="card-title">Bunny</h2>
        <img src="rabbit4.jpg" alt="Rabbit 4" />
        <div>Age: 1.5 years</div>
        <div>Description: Sweet and curious</div>
        <div>Colour: White and brown</div>
        <div>Species: Netherland Dwarf</div>
      </div>
    </div>
  </div>
</div>





        </div>
    </>
  );
}
