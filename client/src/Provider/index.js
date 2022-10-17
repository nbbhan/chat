import { createContext, useState } from 'react'

export const Data = createContext()

function Provider({children}) {

    const [theme, setTheme] = useState('light')

    const handleChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    // Water
    const value = {
        theme,
        handleChange
    }

    return (
        <Data.Provider value={value}>
            {children}
        </Data.Provider>
    )
}

export default Provider;