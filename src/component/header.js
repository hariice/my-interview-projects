import React, { useState } from 'react'

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleSwitch = () => {
        setIsToggled(!isToggled); // Toggle the state
      };
  return (
    <div style={{
        backgroundColor: isToggled ? '#333' : '#fff',
        color: isToggled ? '#fff' : '#000',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <label className='switch'>
            
        <input type='checkbox' checked={isToggled} onChange={toggleSwitch} />
        <span className='slider round'></span>
        </label>
    </div>
  )
}

export default Header