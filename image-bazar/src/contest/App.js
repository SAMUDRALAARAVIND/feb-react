import { useState } from "react";
import { Input } from "./Input";

const inputs = [
  {
    name: "email",
    label: "Email",
    errorMessage: "Invalid email format",
    type: "email"
  },
  {
    name: "password1",
    label: "Password",
    errorMessage: "Password must be atleast 8 characters",
    type: "password"
  },
  {
    name: "password2",
    label: "Confirm Password",
    errorMessage: "Password do not match",
    type: "password"
  }
];

function App() {
  const [isFormValid, setIsFormValid] = useState({
    email: false,
    password1: false,
    password2: false
  });

  const onFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    let isValid = false;
    if (name === "email") {
      isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    }
    else if (name === "password1") {
      isValid = value.length >= 8;
    }
    else if (name === "password2") {
      // password1
      let password1 = event.currentTarget.password1.value;
      isValid = value.length >= 8 && password1 === value;
    }

    // {email: true, password1: false, password: false}
    setIsFormValid({ ...isFormValid, [name]: isValid });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    let formValid = true;
    for (let key in isFormValid) {
      formValid &&= isFormValid[key]
    }
    formValid ? alert("Form is valid") : alert("Invalid form, you can't submit")
  }

  return (
    <div className="App">
      <form className="form" onChange={onFormChange} onSubmit={onSubmitForm}>
        {
          inputs.map(input => {
            return (
              <Input
                key={input.name}
                name={input.name}
                errorMessage={input.errorMessage}
                label={input.label}
                isValid={isFormValid[input.name]}
                type={input.type}
              />
            );
          })
        }
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
