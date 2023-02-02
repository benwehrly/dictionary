import { useState } from 'react';

const useToggle = (initial) => {
    const [ isToggled, setIsToggled ] = useState(initial)
  
    const handleToggle = () => setIsToggled(!isToggled)
    const toggleOn = () => setIsToggled(true)
    const toggleOff = () => setIsToggled(false)
  
    return {
      isToggled, handleToggle, toggleOn, toggleOff
    }
  }

  export default useToggle;