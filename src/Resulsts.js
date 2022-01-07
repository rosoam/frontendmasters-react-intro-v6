import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No results found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            key={pet.id}
            id={pet.id}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state} `}
          />
        ))
      )}
    </div>
  );
};

export default Results;
