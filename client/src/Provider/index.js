import { createContext, useState } from 'react'

export const Data = createContext()

function Provider({children}) {

    const [theme, setTheme] = useState('light')

    const [width, setWidth] = useState(65)

    const handleChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const handleChangeWidth = () => {
        setWidth(width === 65 ? 250 : 65)
    }

    const value = {
        theme,
        width,
        handleChange,
        handleChangeWidth
    }

    return (
        <Data.Provider value={value}>
            {children}
        </Data.Provider>
    )
}

export default Provider;