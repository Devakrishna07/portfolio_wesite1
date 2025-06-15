import React, { useEffect, useState } from 'react'

function ToggleButton({
    modeA = "light",
    modeB = "dark",
    iconA = "☀️",
    iconB = "🌙",
    onToggle = () => {},
    storageKey = "theme",
}) {

    const [mode, setMode] = useState(() => localStorage.getItem(storageKey)  || modeA);

    useEffect(() => {
        localStorage.setItem(storageKey, mode);
        onToggle(mode);
    }, [mode, storageKey, onToggle]);

    const toggle = () => {
        setMode((prev) => (prev === modeA ? modeB : modeA));
    };
  return (
    <button 
      onClick={toggle}
    className='rounded-lg border borrder-white w-10 shadow-lg bg-white dark:bg-black'>
        {mode == modeA ? iconA : iconB}
    </button>
  )
}

export default ToggleButton
