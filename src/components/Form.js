import React from "react";

function Form({firstName, lastName, handleFirstNameChange, handleLastNameChange}) {

  //COMMENTED OUT TO MAKE FORM ONLY HOLD OUR JSX. GO TO ParentComponent FOR THE FUNCTIONS

  // const [firstName, setFirstName] = useState("Ryan");
  // const [lastName, setLastName] = useState("Kotsovolos");

  // function handleFirstNameChange(e) {
  //   setFirstName(e.target.value)
  // }

  // function handleLastNameChange(e) {
  //   setLastName(e.target.value)
  // }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} /> 
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
     
    </form>
  );
}

export default Form;
