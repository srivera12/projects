import { useState } from 'react';

const useInputState = (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const [isPristine, setIsPristine] = useState(true);
  const handleChange = (e) => {
    setValue(e.target.value);
    setIsPristine(false);
  };
  const reset = () => {
    setValue('');
    setIsPristine(true);
  };
  return [value, handleChange, reset, isPristine];
};

export default useInputState;
