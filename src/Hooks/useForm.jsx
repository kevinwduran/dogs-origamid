import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: "Preencha um e-mail válido.",
  },
  password: {
    regex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
    message:
      "A senha precisa ter 8 carácteres, sendo, no mínimo, uma letra maiúscula, uma minúscula e um dígito.",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if (type === false) return true; // não tem validação
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      return true;
      setError(null);
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value), // já exporta validando
    onBlur: () => validate(value),
  };
};

export default useForm;
