import { createContext, useState } from 'react'

export const Data = createContext()

function Provider({children}) {

    // Usestated
    const [theme, setTheme] = useState('light')

    const [width, setWidth] = useState(65)

    const [chatshow, setChatshow] = useState('none')

    // Handle
    const handleChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const handleChangeWidth = () => {
        setWidth(width === 65 ? 250 : 65)
    }

    const handleChatshow = () => {
        setChatshow(chatshow === 'none' ? 'block' : 'none')
    }

    // Export
    const value = {
        theme,
        width,
        chatshow,
        handleChange,
        handleChangeWidth,
        handleChatshow,
    }

    return (
        <Data.Provider value={value}>
            {children}
        </Data.Provider>
    )
}

export default Provider;