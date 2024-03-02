const Coffe = ({ value, onSelect }) => {
  
    const handleSizeChange = (evt) => {
      setCoffeeSize(evt.target.value);
    };
  
    return (
      <>
        <h1>Select coffee size</h1>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="small"
            checked={value === "small"}
            onChange={(evt) => onSelect(evt.target.value)}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="medium"
            checked={value === "medium"}
            onChange={(evt) => onSelect(evt.target.value)}
          />
          Meduim
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="large"
            checked={value === "large"}
            onChange={(evt) => onSelect(evt.target.value)}
          />
          Large
        </label>
        <p><b>Selected Size: </b>{value}</p>
      </>
    );
  };
  

export default Coffe