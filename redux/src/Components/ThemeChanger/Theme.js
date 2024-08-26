import React from 'react'
import './theme.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './ThemeSlice/ThemeSlice';

function Theme() {
    const theme = useSelector((state)=>state.theme.theme);
    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(toggleTheme());
    }

    const isDarkMode = theme === 'dark';

    const styles = {
        container: {
            backgroundColor: isDarkMode ? '#000' : '#FFF',
            color: isDarkMode ? '#FFF' : '#333',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }
    }
  return (
    <div style={styles.container}>
      <h1>Theme Switcher Using Redux.</h1>
      <button onClick={handleToggle} className='button'>ChangeTheme</button>
    </div>
  )
}

export default Theme
