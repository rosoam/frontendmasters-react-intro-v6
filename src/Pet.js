const Pet = (props) => {
  console.log(props);
  return (
    <div className="pet-item">
      <h4 className="pet-name">
        {props.name} (<span className="pet-location">{props.location}</span>)
      </h4>
      <span className="pet-breed">{props.breed}</span>
    </div>
  );
};

export default Pet;
