import { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const [error, setError] = useState("");
  
  const handlerChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setValue(e.target.value);
    if (value.length > 0) {
          setIsDirty(false);
        }
  };

  const handlerBlur = () => {
    
    if (!(value.length > 0)) {
      setIsDirty(true)
      setError("Поле має бути заповненим.");
        } else {
          setIsDirty(false)
        }
  };

  return { value, isDirty, error, handlerChange, handlerBlur };
}

export default useInput;