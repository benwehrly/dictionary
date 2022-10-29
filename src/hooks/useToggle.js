import { useState } from 'react';

const useToggle = (initial) => {
    const [ isToggled, setIsToggled ] = useState(initial)
  
    function handleToggle(){
      setIsToggled(!isToggled)
    }
  
    return {
      isToggled, handleToggle
    }
  }

  export default useToggle;