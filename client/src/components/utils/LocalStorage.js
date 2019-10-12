import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue;
    })
  
    const customSetter = (newValue) => {
      setValue(newValue)
      window.localStorage.setItem(key, JSON.stringify(newValue))
    }
  
    return [value, customSetter]
  }

  export default useLocalStorage;