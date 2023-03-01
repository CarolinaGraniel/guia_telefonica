const Persons = ({ personsToShow }) => {
    return (
      <div>
        {personsToShow.map(({ name, phone }) => (
            <div key={name}>
                {name} {phone}
            </div>
        ))}
      </div>
    );
};



export default Persons;