import { useState } from "react";

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    // avoid the form sending number as a string
    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "file") {
      [value] = e.target.files;
    }
    setInputs({
      // update our local state
      ...inputs,
      [name]: value,
    });
  }

  // reset to initial state
  function resetForm() {
    setInputs(initial);
  }

  // clear from after submit
  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  }

  // return stuff we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
