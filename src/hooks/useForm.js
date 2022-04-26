import { useState } from "react";

export const useForm = () => {
  const [values, setValues] = useState({});

  const setValue = (event) => {
    const { name, value } = event.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return {
      setValue,
      values
  }
};
